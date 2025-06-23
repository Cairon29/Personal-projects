/*

    Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must be removed to avoid confusion. Additionally, the gifts must be sorted in ascending order before being delivered to the elves.

    Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.

*/

function prepareUniqueGifts(gifts: number[]): number[] {
    const preparedGifts: number[] = [];
  
    let variable1 = 0;
    let variable2: number = 0

    gifts.forEach((gift) => {
      if (!preparedGifts.includes(gift))preparedGifts.push(gift)
    })
    preparedGifts.sort((a, b) => (a - b));
  
    return preparedGifts
}