using System;
using System.Drawing;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace AlexXieBrain
{
    public class DrawCore

    {
        private static double GetK(Point pointA, Point pointB)
        {
            double x0 = pointA.X, x1 = pointB.X, y0 = pointA.Y, y1 = pointB.Y;
            return (y1 - y0) / (x1 - x0);
        }
        protected static int GetX(Point pointA, Point pointB, double y)
        {
            var k = GetK(pointA, pointB);
            return (int)(pointA.X - (pointA.Y - y) / k);
        }
        protected static int GetY(Point pointA, Point pointB, double x)
        {
            var k = GetK(pointA, pointB);
            return (int)(pointA.Y - k * (pointA.X - x));
        }

        public virtual Bitmap CombinePic(Bitmap srcBitmap, Bitmap destBitmap)
        {
            var newBitmap = new Bitmap(srcBitmap.Width > destBitmap.Width ? destBitmap.Width : srcBitmap.Width,
           srcBitmap.Height > destBitmap.Height ? destBitmap.Height : srcBitmap.Height);
            var x = (srcBitmap.Width - newBitmap.Width) / 2;
            var y = (srcBitmap.Height - newBitmap.Height) / 2;
            var x1 = (destBitmap.Width - newBitmap.Width) / 2;
            var y1 = (destBitmap.Height - newBitmap.Height) / 2;

            using (var grD = Graphics.FromImage(newBitmap))
            {
                grD.DrawImage(destBitmap, new Rectangle(0, 0, newBitmap.Width, newBitmap.Height), new Rectangle(x1, y1, newBitmap.Width, newBitmap.Height), GraphicsUnit.Pixel);
            }
            using (var grD = Graphics.FromImage(newBitmap))
            {
                grD.DrawImage(srcBitmap, new Rectangle(0, 0, newBitmap.Width, newBitmap.Height), new Rectangle(x, y, newBitmap.Width, newBitmap.Height), GraphicsUnit.Pixel);
            }
            return newBitmap;
        }

        protected virtual void DrawLine(Graphics g, Point a, Point b, int penWidth, Color color)
        {
            g.DrawLine(new Pen(color, penWidth), a, b);
        }
        protected virtual Bitmap InverseColor(Bitmap bitmap, Color fontColor, Color backGroundColor)
        {
            var img = new Bitmap(bitmap);
            var graphics = Graphics.FromImage(img);
            graphics.Clear(Color.Empty);

            for (var i = 0; i < bitmap.Width; i++)
            {
                for (var j = 0; j < bitmap.Height; j++)
                {
                    var currentColor = bitmap.GetPixel(i, j);
                    if (currentColor.ToArgb() == backGroundColor.ToArgb())
                    {
                        img.SetPixel(i, j, fontColor);
                    }
                    else if (currentColor.ToArgb() == fontColor.ToArgb())
                    {
                        img.SetPixel(i, j, backGroundColor);
                    }
                    else
                    {
                        img.SetPixel(i, j, currentColor);
                    }
                }
            }
            return img;
        }
        public virtual byte[] GetXaPicBytes(int width, Color fontColor, Color backGroundColor, bool inverseColor = false)
        {
            var goldenRatio = (Math.Sqrt(5) - 1) / 2;
            var penWidth = width / 18;
            var oneSubGoldenRatio = 1 - goldenRatio;
            var height = width;
            double halfWidth = width;
            halfWidth /= 2;
            var xaLeft = new Bitmap(width, height);
            var xa = new Bitmap(xaLeft);
            var graphics = Graphics.FromImage(xaLeft);
            var lineTopPoint = new Point((int)(halfWidth * goldenRatio), 0);
            var lineBottomPoint = new Point((int)(width - halfWidth * oneSubGoldenRatio), height);
            var middleLineY = height - height * goldenRatio * 0.5;
            var middleLinePoint0 = new Point((int)halfWidth, (int)middleLineY);
            var middleLinePoint1 = new Point(GetX(lineTopPoint, lineBottomPoint, middleLineY), (int)middleLineY);
            DrawLine(graphics, lineTopPoint, lineBottomPoint, penWidth, fontColor);
            DrawLine(graphics, middleLinePoint0, middleLinePoint1, penWidth, fontColor);
            var xaG = Graphics.FromImage(xa);
            xaG.FillRectangle(new SolidBrush(backGroundColor), 0, 0, xa.Width, xa.Height);
            xa = CombinePic(xaLeft, xa);
            xaLeft.RotateFlip(RotateFlipType.Rotate180FlipY);
            xa = CombinePic(xaLeft, xa);
            var pic = inverseColor ? InverseColor(xa, fontColor, backGroundColor) : xa;
            using (var mem = new MemoryStream())
            {
                var image = pic;
                image.Save(mem, System.Drawing.Imaging.ImageFormat.Png);
                var byData = new byte[mem.Length];
                mem.Position = 0;
                mem.Read(byData, 0, byData.Length);
                return mem.GetBuffer();
            }
        }


        private Bitmap EmptyBackground(Color specColor, Bitmap backGroundPic, Bitmap xaPic, Func<Bitmap, Bitmap, Bitmap> combinePic)
        {
            var staticColor = Color.FromArgb(1, 2, 3);
            for (var i = 0; i < backGroundPic.Width; i++)
            {
                for (var j = 0; j < backGroundPic.Height; j++)
                {
                    var currentColor = backGroundPic.GetPixel(i, j);
                    if (currentColor.ToArgb() == specColor.ToArgb())
                    {
                        backGroundPic.SetPixel(i, j, staticColor);
                    }
                }
            }

            var picResult = combinePic(xaPic, backGroundPic);
            for (var i = 0; i < picResult.Width; i++)
            {
                for (var j = 0; j < picResult.Height; j++)
                {
                    var currentColor = picResult.GetPixel(i, j);
                    if (currentColor.ToArgb() == specColor.ToArgb())
                    {
                        picResult.SetPixel(i, j, Color.Empty);
                    }
                    else if (currentColor.ToArgb() == staticColor.ToArgb())
                    {
                        picResult.SetPixel(i, j, specColor);
                    }
                }
            }
            return picResult;
        }
        private Bitmap Byte2Bitmap(byte[] picBytes)
        {
            return new Bitmap(new MemoryStream(picBytes));
        }

        private byte[] Bitmap2Byte(Bitmap image)
        {
            using (var mem = new MemoryStream())
            {
                image.Save(mem, System.Drawing.Imaging.ImageFormat.Png);
                var byData = new byte[mem.Length];
                mem.Position = 0;
                mem.Read(byData, 0, byData.Length);
                return mem.GetBuffer();
            }
        }

        public virtual byte[] GetXaPicBytes(Color fontColor, Bitmap backGroundPic, bool emptyBackground)
        {
            var width = backGroundPic.Width > backGroundPic.Height ? backGroundPic.Height : backGroundPic.Width;
            var baseXaPic = Byte2Bitmap(GetXaPicBytes(width, fontColor, Color.Empty, true));
            var pic = emptyBackground ? EmptyBackground(fontColor, backGroundPic, baseXaPic, CombinePic) : CombinePic(baseXaPic, backGroundPic);
            return Bitmap2Byte(pic);
        }
        public Bitmap InverseHalfColor(Bitmap pic)
        {
            for (var i = pic.Width / 2 - 1; i < pic.Width; i++)
            {
                for (var j = 0; j < pic.Height; j++)
                {
                    var currentColor = pic.GetPixel(i, j);
                    pic.SetPixel(i, j, Color.FromArgb(currentColor.ToArgb() ^ 0xffffff));
                }
            }
            return pic;
        }


        public Bitmap InverseColor(Bitmap pic)
        {
            for (var i = 0; i < pic.Width; i++)
            {
                for (var j = 0; j < pic.Height; j++)
                {
                    var currentColor = pic.GetPixel(i, j);
                    pic.SetPixel(i, j, Color.FromArgb(currentColor.ToArgb() ^ 0xffffff));
                }
            }
            return pic;
        }

        public async void Draw(string picPath)
        {
            var picList = picPath.Split(' ');
            if (picList.Length > 1)
            {
                picPath = picList[picList.Length - 1];
            }
            //163music replace
            picPath = picPath.Split(new[] { "?param=" }, StringSplitOptions.None)[0];
            Func<byte[]> getPicStream;
            if (File.Exists(picPath))
            {
                getPicStream = () => File.ReadAllBytes(picPath);
            }
            else
            {
                getPicStream = () => Core.Spider.Get(picPath);
            }
            await TaskCore.AsyncRun(getPicStream, result =>
                {
                    var rootPath = $"XA_Icon/{ExtensionCore.GetTimeStamp()}";
                    Core.File.SaveFile(result, $"{rootPath}/0.original.png");
                    Core.File.SaveFile(GetXaPicBytes(Color.White, Byte2Bitmap(result), false), $"{rootPath}/1.xa.png");
                    Core.File.SaveFile(GetXaPicBytes(Color.White, Byte2Bitmap(result), true), $"{rootPath}/2.empty.xa.png");
                    Core.File.SaveFile(GetXaPicBytes(Color.White, InverseColor(Byte2Bitmap(result)), false), $"{rootPath}/3.inverse.xa.png");
                    Core.File.SaveFile(GetXaPicBytes(Color.White, InverseColor(Byte2Bitmap(result)), true), $"{rootPath}/4.inverse.empty.xa.png");
                    DrawTattooAi($"{rootPath}/2.empty.xa.png", $"{rootPath}/5.ai.xa.png");
                    //Core.File.SaveFile(GetXaPicBytes(Color.White, InverseHalfColor(Byte2Bitmap(result)), false), $"{rootPath}/5.inverse.xa.png");
                    //Core.File.SaveFile(GetXaPicBytes(Color.White, InverseHalfColor(Byte2Bitmap(result)), true), $"{rootPath}/6.inverse.empty.xa.png");
                });
        }
        //@"C:\Data\Github\scripts\PowerShell\XA_Icon\NotBad\20170809164319\2.empty.xa.png"
        public async void DrawTattooAi(string path, string savepath)
        {
            await Task.Run(() =>
                 {
                     var xIndex = 0;
                     var tempXaImg = Byte2Bitmap(File.ReadAllBytes(path));
                     var xaImg = (Bitmap)tempXaImg.GetThumbnailImage(530, 530, () => false, IntPtr.Zero);
                     for (var x = 0; x < xaImg.Width; x++)
                     {
                         for (var y = xaImg.Height - 1; y >= 0; y--)
                         {
                             if (xaImg.GetPixel(x, y).ToArgb() != 0)
                             {
                                 xIndex = x;
                                 break;
                             }
                         }
                         if (xIndex != 0)
                         {
                             break;
                         }
                     }
                     var tempImg = new Bitmap(xaImg.Width - xIndex * 2 + 70, xaImg.Height + 70);
                     for (var x = xIndex; x < xaImg.Width - xIndex; x++)
                     {
                         for (var y = 0; y < xaImg.Height; y++)
                         {
                             tempImg.SetPixel(x - xIndex, y, xaImg.GetPixel(x, y));
                         }
                     }
                     var img = new Bitmap(210 * 10, 297 * 10);
                     for (var y = 0; y < img.Height; y++)
                     {
                         for (var x = 0; x < img.Width; x++)
                         {
                             img.SetPixel(x, y, tempImg.GetPixel(x % tempImg.Width, y % tempImg.Height));
                         }
                     }
                     img.Save(savepath);
                 });
        }
    }
}
