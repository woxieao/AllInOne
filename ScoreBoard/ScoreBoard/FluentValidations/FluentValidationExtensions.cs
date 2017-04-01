using Antlr.Runtime.Misc;
using FluentValidation;
using ScoreBoard.Models.Exceptions;

namespace ScoreBoard.FluentValidations
{
    public abstract class FluentValidationExtensions<T> : AbstractValidator<T>
    {
        public void OkOrThrow(T dataToCheck)
        {
            var result = base.Validate(dataToCheck);
            if (!result.IsValid)
            {
                throw new AjaxException(string.Join("\n", result.Errors));
            }
        }
    }
}