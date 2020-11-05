
// BUBBLE SORT
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

//  MERGE SORT

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

// QUICKSORT

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
};

// 1

// after three recursive calls to mergesort, the resulting list would be [21, 1] as it found a basecase

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?

//  

const main = (arr) => {
    let list = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

    return mergeSort(list)
}

// console.log(main())


// 2 

//2.1 the pivot could be either 14 or 17

//2.2 10, 12, 14, 17, 13, 15, 19, 16

// 3 

let list = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5"


let newList = []
list.split(' ').map(l => newList.push(Number(l)))

// console.log(newList)

function swap2(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partIt(array, start, end)
    array = qSort(array, start, middle)
    array = qSort(array, middle + 1, end)
    return array
}

function partIt(arr, s, e) {
    const pivot = arr[e - 1]
    let j = s
    for (let i = s; i < e - 1; i++) {
        if (arr[i] <= pivot) {
            swap2(arr, i, j)
            j++
        }
    }
    swap2(arr, e - 1, j)
    return j
}

// console.log(qSort(newList))

// console.log(mergeSort(newList))


// function sortBinary(arr) {
//     const result = []

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0 ) {
//             result.unshift(0)
//         } else {
//             result.push(1)
//         }
//     }
//     return result
// }


// function sortBinary(arr) {
//     let zeroes = []
//     let ones = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             zeroes.push(arr[i])
//         } else {
//             ones.push(arr[i])
//         }
//     }
//     return zeroes.concat(ones)
// }

//partitioning solution
function swap3(arr, i, j) {
    let tmp = arr[j]
    arr[j] = arr[i]
    arr[i] = tmp
}

function sortBinary(arr) {
    if(arr.length === 0){
        return arr
    }
    let i = 0

    const pivot = 0

    console.log(pivot)

    for(let j = 0; j <= arr.length; j++) {
        if(arr[j] <= pivot) {
            swap3(arr, i, j)
            i++
        }
    }
    return arr
}


// console.log(sortBinary([0, 1, 1, 0, 1, 0, 1, 0]))
// console.log(sortBinary([1, 1, 1, 1, 1, 1]))
// console.log(sortBinary([0, 0, 0, 0, 0]))
// console.log(sortBinary([]))


// 8 sorting books

function sortBooks(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

console.log(sortBooks(['Not my book', 'My favorite book', 'Fuck books', 'Read books', 'How to Read']))




