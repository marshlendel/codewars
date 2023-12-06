class User {
  constructor() {
    this.rank = -1;
    this.progress = 0;
  }

  rankUp(ranks) {
    this.rank += ranks;
    if (this.rank === 0) this.rank = 1;
    console.log(
      `You ranked up by ${ranks} ranks! Your rank is now ${this.rank}`
    );
  }

  incProgress(rank) {
    if (rank < -8 || rank === 0 || rank > 8) {
      throw new Error("Invalid rank");
    }

    if (rank === this.rank - 2) {
      console.log(`progress increased by 0`);
      return;
    }

    if (rank === this.rank - 1 || (this.rank === 1 && rank === this.rank - 2)) {
      console.log(`progress increased  point`);
      console.log(`${this.progress} + 1 is ${this.progress + 1}`);
      this.progress = this.progress + 1;
    }

    if (rank === this.rank) {
      console.log(`progress increased 3 points`);
      console.log(`${this.progress} + 3 is ${this.progress + 3}`);
      this.progress = this.progress + 3;
    }

    if (rank > this.rank) {
      let diff = rank - this.rank;

      if (this.rank === -1 && rank === 1) {
        console.log("this was triggerd");
        diff = 1;
      }

      let amount = 10 * diff * diff;
      console.log(`progress increased ${amount} points`);
      console.log(`${this.progress} + ${amount} is ${this.progress + amount}`);

      this.progress = this.progress + amount;
    }

    if (this.progress >= 100) {
      this.rankUp(Math.floor(this.progress / 100));
    }

    this.progress = this.progress % 100;
  }
}

var user = new User();
user.incProgress(1);
console.log(user.rank);
console.log(user.progress);
