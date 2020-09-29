// map lock map to the reversed array of items
//
// example:
// for array [1, 2, 3] with lockMap [0] it should give
// lockMap [2] for reversed array [3, 2, 1]

export function reverseLockMap<T = any>(items: T[], lockMap: number[]): number[] {
  return lockMap.map((lockedIndex) => (items.length - 1) - lockedIndex);
}
  
export function getRightUnlockedItem(index: number, lockMap: number[]): number {
  let unlockedIndex = index + 1;
  while (lockMap.includes(unlockedIndex)) {
    unlockedIndex++;
  }
  return unlockedIndex;
}

export function pullStack<T = any>(items: T[], lockMap: number[]): T[] {
  return [...items, items[getRightUnlockedItem(-1, lockMap)]].reduce((result, item, index, shifted) => {
    return [
      ...result,
      lockMap.includes(index)
        ? item
        : shifted[getRightUnlockedItem(index, lockMap)]
    ];
  }, [] as T[]).slice(0, -1);
}

export function pushStack<T = any>(items: T[], lockMap: number[]): T[] {
  return pullStack(items.reverse(), reverseLockMap(items, lockMap)).reverse();
}

export function unlockItem(index: number, lockMap: number[]): number[] {
  return lockMap.filter(lockedItems => lockedItems !== index);
}

export function isItemLocked(index: number, lockMap: number[]): boolean {
  return lockMap.some(lockMap => lockMap === index);
}
