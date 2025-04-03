// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

function migratoryBirds(arr: number[]): number {
    let mostSightedType = 0;
    let mostSightedCount = 0;
    let sightedTypes: { [key: number]: number} = {}

    for(const bird of arr) {
        sightedTypes[bird] = (sightedTypes[bird] || 0) + 1;
    }

    for (const key in sightedTypes) {
        if (sightedTypes[key] > mostSightedCount) {
            mostSightedType = parseInt(key);
            mostSightedCount = sightedTypes[key]
        }

        if ((sightedTypes[key] === mostSightedCount) && (parseInt(key) < mostSightedType)) {
            mostSightedType = parseInt(key);
            mostSightedCount = sightedTypes[key];
        }
    }

    return mostSightedType;
}

migratoryBirds([1, 4, 4, 4, 5, 3])