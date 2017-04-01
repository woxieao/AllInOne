using FluentValidation;
using ScoreBoard.Models.Bll;
using ScoreBoard.Models.Exceptions;

namespace ScoreBoard.FluentValidations
{
    public class RoomInfoValidation : FluentValidationExtensions<RoomInfo>
    {
        public RoomInfoValidation()
        {
            RuleFor(i => i).Must(i => i.CountingMaxValue > 0).WithMessage("计分阈值必须大于0");
            RuleFor(i => i).Must(i => i.PlayerCountLimit >= 2).WithMessage("参与人数至少为2人");
            RuleFor(i => i).Must(i => !string.IsNullOrWhiteSpace(i.RoomName)).WithMessage("房间名称不可为空");
            RuleFor(i => i).Must(i => !string.IsNullOrWhiteSpace(i.RoomPwd)).WithMessage("房间密码不可为空");
            RuleFor(i => i).Must(i => !string.IsNullOrWhiteSpace(i.RoomOwnerOpenId)).WithMessage("房间创建者OpenId不可为空");
        }
    }
}