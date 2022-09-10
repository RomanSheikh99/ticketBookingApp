const app = Vue.createApp({
    data() {
      return {
        confirmBox: false,
        userName: "Your Name",
        userNumber: "017 XXXXXXX",
        discountRate: 0,
        discount: 0,
        seetsInfo:[
            {id: 1, title: "abailable", bg: "#fff"},
            {id: 2, title: "selected", bg: "#00FD17"},
            {id: 3, title: "booked", bg: "#7F807C"},
            {id: 4, title: "sold", bg: "#FD0000"},
            ],
        seats: [
                {
                  name: "A1",
                  type: "available",
                  price: 500
                },
                {
                  name: "A2",
                  type: "available",
                  price: 500
                },
                {
                  name: "A3",
                  type: "available",
                  price: 500
                },
                {
                  name: "A4",
                  type: "available",
                  price: 500
                },
                {
                  name: "B1",
                  type: "available",
                  price: 450
                },
                {
                  name: "B2",
                  type: "available",
                  price: 450
                },
                {
                  name: "B3",
                  type: "booked",
                  price: 450
                },
                {
                  name: "B4",
                  type: "booked",
                  price: 450
                },
                {
                  name: "C1",
                  type: "sold",
                  price: 500
                },
                {
                  name: "C2",
                  type: "sold",
                  price: 500
                },
                {
                  name: "C3",
                  type: "available",
                  price: 500
                },
                {
                  name: "C4",
                  type: "available",
                  price: 500
                },
                {
                  name: "D1",
                  type: "available",
                  price: 400
                },
                {
                  name: "D2",
                  type: "available",
                  price: 400
                },
                {
                  name: "D3",
                  type: "available",
                  price: 400
                },
                {
                  name: "D4",
                  type: "available",
                  price: 400
                },
                {
                  name: "E1",
                  type: "available",
                  price: 300
                },
                {
                  name: "E2",
                  type: "available",
                  price: 300
                },
                {
                  name: "E3",
                  type: "booked",
                  price: 300
                },
                {
                  name: "E4",
                  type: "booked",
                  price: 300
                },
                {
                  name: "F1",
                  type: "booked",
                  price: 300
                },
                {
                  name: "F2",
                  type: "available",
                  price: 300
                },
                {
                  name: "F3",
                  type: "available",
                  price: 300
                },
                {
                  name: "F4",
                  type: "available",
                  price: 300
                },
                {
                  name: "G1",
                  type: "available",
                  price: 300
                },
                {
                  name: "G2",
                  type: "available",
                  price: 300
                },
                {
                  name: "G3",
                  type: "available",
                  price: 300
                },
                {
                  name: "G4",
                  type: "available",
                  price: 300
                },
              ]
      };
    },
    computed:{
      handleMaxSeat(){
        let selectedItem = this.seats.filter(item => item.type === "selected");
        return selectedItem;
      },
      totalPrice(){
        let tp = 0;
        this.handleMaxSeat.map(seat => tp += seat.price);
        tp = tp - this.discount;
        return tp;
      }
    },
    methods: {
        handleSelect(i){
          if(this.seats[i].type == "booked" || this.seats[i].type == "sold"){
            alert("You Can't Select This Seat!");
          }
          else if(this.seats[i].type == "available" && this.handleMaxSeat.length > 2){
            alert("You Can't Select More Then 3 Seat");
          }
          else{
            this.seats[i].type = this.seats[i].type == "selected" ? "available" : "selected";
          }
          // this.discount = 0;
          // this.discountRate = 0;
        },
        handleConfirmBox(){
          this.confirmBox = true;
        },
        handleSubmit(){
          this.seats.map(seat => {
            if(seat.type == "selected"){
              seat.type = "sold";
            }
          })
          this.confirmBox = false;
        }
    },
    watch:{
      discountRate(nv){
        if(this.handleMaxSeat.length < 1 || this.discountRate < 1){
          this.discountRate = 0;
          this.discount = 0;
        }
        if(this.handleMaxSeat.length === 1 && this.discountRate > 3){
          this.discountRate = 3;
          alert("You Will Get Max 3% Discount For 1 ticket");
        }
        if(this.handleMaxSeat.length === 2 && this.discountRate > 5){
          this.discountRate = 5;
          alert("You Will Get Max 5% Discount For 2 ticket");
        }
        if(this.handleMaxSeat.length === 3 && this.discountRate > 6){
          this.discountRate = 6;
          alert("You Will Get Max 6% Discount For 3 ticket");
        }
        this.discount = Math.round((this.totalPrice / 100) * nv);
      },
      handleMaxSeat(nv){
        if(this.handleMaxSeat.length < 1 && this.discountRate > 0){
          this.discountRate = 0;
        }
        if(this.handleMaxSeat.length === 1 && this.discountRate > 3){
          this.discountRate = 3;
        }
        if(this.handleMaxSeat.length === 2 && this.discountRate > 5){
          this.discountRate = 5;
        }
        if(this.handleMaxSeat.length === 3 && this.discountRate > 6){
          this.discountRate = 6;
        }
      }
    }
  });
  
app.mount("#app");