const mergeSortedArrays = (left, right) => {
  if (!Array.isArray(left)) {
    throw new TypeError("Left is expected to be an array.");
  }

  if (!Array.isArray(right)) {
    throw new TypeError("Right is expected to be an array.");
  }

  const mergedArrayLength = left.length + right.length;
  const mergedArray = [];
  let i = 0;
  let j = 0;

  for (let k = 0; k < mergedArrayLength; k++) {
    if (i >= left.length) {
      // all items of left have already been placed in mergedArray => pick item from right
      mergedArray[k] = right[j];
      j++;
      continue;
    }

    if (j >= right.length) {
      // all items of right have already been placed in mergedArray => pick item from left
      mergedArray[k] = left[i];
      i++;
      continue;
    }

    if (left[i] < right[j]) {
      mergedArray[k] = left[i];
      i++;
    } else {
      mergedArray[k] = right[j];
      j++;
    }
  }

  return mergedArray;
};

const computeArrayMedianIndex = arrayLength => {
  if (arrayLength < 1) {
    throw new RangeError("Array lenght must be greater than or equal to 1.");
  }

  return Math.ceil((arrayLength - 1) / 2);
};

const mergeSort = nums => {
  if (!Array.isArray(nums)) {
    throw new TypeError("nums must be an array");
  }

  if (nums.some(item => typeof item !== "number")) {
    throw new TypeError("all items in nums must be of type number");
  }

  // recursion base case
  if (nums.length < 2) {
    return nums;
  }

  const medianIndex = computeArrayMedianIndex(nums.length);
  const left = nums.slice(0, medianIndex);
  const right = nums.slice(medianIndex, nums.length);

  // recursion
  return mergeSortedArrays(mergeSort(left), mergeSort(right));
};

module.exports = {
  mergeSort
};
