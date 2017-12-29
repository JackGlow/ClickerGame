/* Add new items here */

/*
Also new functions:
	cb_grant(1000); -> gives 1000$
	cb_take(1000); -> takes 1000$
	cb_dpcadd(1000); -> adds 1000$ to DPC
	cb_dpctake(1000); -> takes 100% from DPC
	logbuy(items[0]); -> logs "Player Bought (FISRT_ITEM_IN_ITEMS_ARRAY)!"
	cart(items[0]); -> Popup
*/

/* Function for custom buyable:

function buyNAME(){
	if (money >= PRICE) {
		cb_take(PRICE);
		cb_dpcadd(HOWMUCHDPCGIVES);
		logbuy(items[0]);
		cart(items[0]);
	}
}

Example:
function buyBTCMiner(){
	if (money >= 100000) {
		cb_take(100000);
		cb_dpcadd(1000);
		logbuy(items[3]);
		cart(items[3]);
	}
}
*/

var items = ["testitem"]; /* Please write name of items here like this: var items = ["Glowing Apple", "BTC Miner"]. Starts from 0. Glowing Apple will be 0. */
/* do not remove this v */
items.forEach(function(item, index, array) {
  console.log("All custom Items: ");
  console.log(item, index);
  console.log("--------------");
});
/* do not remove this ^ */