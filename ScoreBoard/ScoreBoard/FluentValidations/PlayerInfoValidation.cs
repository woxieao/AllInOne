using FluentValidation;
using ScoreBoard.Models.Bll;

namespace ScoreBoard.FluentValidations
{
    public class UserInfoValidation : FluentValidationExtensions<UserInfo>
    {
        public UserInfoValidation()
        {
            RuleFor(i => i).Must(i => !string.IsNullOrWhiteSpace(i.OpenId)).WithMessage("用户OpenId不可为空");
            RuleFor(i => i).Must(i => !string.IsNullOrWhiteSpace(i.PicUrl)).WithMessage("用户头像不可为空");
            RuleFor(i => i).Must(i => !string.IsNullOrWhiteSpace(i.Username)).WithMessage("用户名称不可为空");
        }
    }
}