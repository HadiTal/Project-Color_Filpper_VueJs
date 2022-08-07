const app = Vue.createApp({
    data() {
        return {
            color: "",
            colorArray: [],
        };
    },
    methods: {
        //Random number generation function
        gernrateColorLoad() {
            this.colorArray = [];
            this.color = "";

            for (let i = 0; i <= 5; i++) {
                const randomHexColor = Math.floor(Math.random() * 15 + 0);

                switch (randomHexColor) {
                    case 10:
                        {
                            this.colorArray.push("A");
                            break;
                        }
                    case 11:
                        {
                            this.colorArray.push("B");
                            break;
                        }
                    case 12:
                        {
                            this.colorArray.push("C");
                            break;
                        }
                    case 13:
                        {
                            this.colorArray.push("D");
                            break;
                        }
                    case 14:
                        {
                            this.colorArray.push("E");
                            break;
                        }
                    case 15:
                        {
                            this.colorArray.push("F");
                            break;
                        }
                    default:
                        {
                            this.colorArray.push(randomHexColor);
                            break;
                        }
                }
            }
            this.color += "#";

            for (let i = 0; i < this.colorArray.length; i++) {
                this.color += this.colorArray[i];
            }
        },
    },
    //Running the color generation function when the browser is loaded
    mounted() {
        this.gernrateColorLoad();
    },
});

app.mount("#main-Project");