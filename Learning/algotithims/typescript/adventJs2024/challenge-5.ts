type Shoe = {
    type: 'I' | 'R'
    size: number
}

function organizeShoes(shoes: Shoe[]): number[] {

    let seen_index: number[] = []
    let available_pairs: number[] = []


    for (let i = 0; i < (shoes.length - 1); i++) {

        const first_shoe = shoes[i];

        for (let j = i + 1; j < shoes.length; j++) {
            const second_shoe = shoes[j]
            
            if (!seen_index.includes(i) && !seen_index.includes(j)) {
                if (first_shoe.size === second_shoe.size && first_shoe.type !== second_shoe.type) {
                    seen_index.push(i)
                    seen_index.push(j)
                    available_pairs.push(first_shoe.size)
                }
            }

        }
        
    }

    return available_pairs
}

const shoes: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

const shoes2 : Shoe[]= [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

const shoes3 : Shoe[]= [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes)
organizeShoes(shoes2)
organizeShoes(shoes3)

