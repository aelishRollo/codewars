export class PaginationHelper<T> {
    collection: T[];
    itemsPerPage: number;
    
      constructor(collection:T[], itemsPerPage:number) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage;
      // The constructor takes in an array of items and a integer indicating how many
      // items fit within a single page
      }
      itemCount() {
      return this.collection.length;
      // returns the number of items within the entire collection
      }
      pageCount() {
      return Math.ceil(this.collection.length / this.itemsPerPage);
      // returns the number of pages
      }
      pageItemCount(pageIndex:number) {
      if (pageIndex < 0 || pageIndex >= this.pageCount()) {
        return -1;
      }
      if (pageIndex === this.pageCount() - 1) {
        return this.collection.length % this.itemsPerPage || this.itemsPerPage;
      }
      return this.itemsPerPage;
      // returns the number of items on the current page. page_index is zero based.
      // this method should return -1 for pageIndex values that are out of range
      }
      pageIndex(itemIndex:number) {
      if (itemIndex < 0 || itemIndex >= this.itemCount()) {
        return -1;
      }
      return Math.floor(itemIndex / this.itemsPerPage);
      // determines what page an item is on. Zero based indexes
      // this method should return -1 for itemIndex values that are out of range
      }
  }
