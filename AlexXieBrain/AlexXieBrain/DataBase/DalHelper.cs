using System;
using System.Linq;
using System.Linq.Expressions;
using AlexXieBrain.Helpers;

namespace AlexXieBrain.DataBase
{
    public static class DalHelper
    {
        private static Expression<Func<TSource, bool>> DelDataFilter<TSource>(this Expression<Func<TSource, bool>> predicate) where TSource : DbBase
        {
            return predicate.CombineLambda(x => !x.DelFlag);
        }
        public static TSource FirstNotDel<TSource>(this IQueryable<TSource> source, Expression<Func<TSource, bool>> predicate) where TSource : DbBase
        {
            return source.First(predicate.DelDataFilter());
        }
        public static TSource FirstOrDefaultNotDel<TSource>(this IQueryable<TSource> source, Expression<Func<TSource, bool>> predicate) where TSource : DbBase
        {
            return source.FirstOrDefault(predicate.DelDataFilter());

        }
        public static IQueryable<TSource> WhereNotDel<TSource>(this IQueryable<TSource> source, Expression<Func<TSource, bool>> predicate) where TSource : DbBase
        {
            return source.Where(predicate.DelDataFilter());
        }
        public static TSource SingleOrDefaultNotDel<TSource>(this IQueryable<TSource> source, Expression<Func<TSource, bool>> predicate) where TSource : DbBase
        {
            return source.SingleOrDefault(predicate.DelDataFilter());
        }
        public static TSource SingleNotDel<TSource>(this IQueryable<TSource> source, Expression<Func<TSource, bool>> predicate) where TSource : DbBase
        {
            return source.Single(predicate.DelDataFilter());
        }
    }
}