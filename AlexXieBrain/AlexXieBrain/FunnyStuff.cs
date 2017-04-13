using System;
using System.Drawing;
using System.IO;

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
        public virtual byte[] GetXaPicBytes(Color fontColor, Image backGroundImg, bool inverseColor = false)
        {
            var backGroundPic = (Bitmap)backGroundImg;
            var width = backGroundPic.Width > backGroundPic.Height ? backGroundPic.Height : backGroundPic.Width;
            var picMem = new MemoryStream(GetXaPicBytes(width, fontColor, Color.Empty, inverseColor));
            var baseXaPic = (Bitmap)Image.FromStream(picMem);
            var pic = CombinePic(baseXaPic, backGroundPic);
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

        public void Draw(string picUrl, bool inverseColor = true)
        {
            //if (fontColor.ToArgb() == default(Color).ToArgb())
            //{
            //    fontColor = Color.White;
            //}
            TaskCore.AsyncRun(() => Core.Spider.Get(picUrl), result =>
            {
                var img = new Bitmap(new MemoryStream(result));
                Core.File.SaveFile(GetXaPicBytes(Color.White, img, inverseColor), $"{ExtensionCore.GetTimeStamp()}.xa.png");
            });
        }
    }
}
