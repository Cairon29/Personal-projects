function angryProfessor(k: number, a: number[]): string {
    // Write your code here
    let n = 0
    
    for (const element of a) {
        element <= 0 ? n++ : element
    }

    return n >= k ? 'NO' : 'YES'
}


function beautifulDays(i: number, j: number, k: number): number {
    
    let beautifulDaysCount = 0
    
    for (let day = i; day <= j; day++) {
        let reverseDay = parseInt(day.toString().split('').reverse().join(''))
        
        const isBeauty = Number.isInteger((day - reverseDay) / k)
        
        if (isBeauty) beautifulDaysCount++
    }
    
    return beautifulDaysCount
}


function viralAdvertising(n: number): number {
    
    let totalLikes = 0;
    let shared = 5;

    for (let day = 1; day <= n; day++) {
        const likedToday = Math.floor(shared / 2);
        totalLikes += likedToday;
        shared = likedToday * 3;
    }

    return totalLikes;
}



function jumpingOnClouds(c: number[]): number {
    let jumps = 0;
    let i = 0;

    while (i < c.length - 1) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }
        jumps++;
    }

    return jumps;
}

function hurdleRace(k: number, height: number[]): number {
    
    let doses = 0;
    
    for (const h of height) {
        if (k < h) {
            const diference = (h-k)
            k += diference
            
            doses += diference
        }
    }
    return doses;
}

