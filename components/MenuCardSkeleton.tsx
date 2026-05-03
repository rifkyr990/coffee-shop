export default function MenuCardSkeleton() {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm flex flex-col animate-pulse">
      {/* Image skeleton */}
      <div className="h-52 bg-stone-200 dark:bg-stone-800 shrink-0" />
      {/* Content skeleton */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="h-5 bg-stone-200 dark:bg-stone-800 rounded-full w-3/4" />
        <div className="space-y-2 flex-1">
          <div className="h-3 bg-stone-200 dark:bg-stone-800 rounded-full w-full" />
          <div className="h-3 bg-stone-200 dark:bg-stone-800 rounded-full w-5/6" />
          <div className="h-3 bg-stone-200 dark:bg-stone-800 rounded-full w-4/6" />
        </div>
        <div className="flex gap-2 pt-1">
          <div className="h-5 w-14 bg-stone-200 dark:bg-stone-800 rounded-full" />
          <div className="h-5 w-16 bg-stone-200 dark:bg-stone-800 rounded-full" />
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-stone-800">
          <div className="h-5 w-20 bg-stone-200 dark:bg-stone-800 rounded-full" />
          <div className="h-5 w-24 bg-stone-200 dark:bg-stone-800 rounded-full" />
        </div>
      </div>
    </div>
  );
}
