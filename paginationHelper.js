class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    if (pageIndex <= this.pageCount() - 1 && pageIndex >= 0) {
      console.log(this.pageCount());
      return pageIndex === this.pageCount() - 1 &&
        this.itemCount() % this.itemsPerPage !== 0
        ? this.itemCount() % this.itemsPerPage
        : this.itemsPerPage;
    } else {
      return -1;
    }
  }
  pageIndex(itemIndex) {
    if (itemIndex <= this.itemCount() - 1 && itemIndex >= 0) {
      return Math.floor(itemIndex / this.itemsPerPage);
    } else {
      return -1;
    }
  }
}

var helper = new PaginationHelper(
  new Array(46).fill().map((_, index) => index),
  39
);
console.log(helper.pageIndex(35));
