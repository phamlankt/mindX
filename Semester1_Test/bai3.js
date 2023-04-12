const users = [
    {
        user_id: "user1",
        img: "images/user1.jpg",
        name: "Lelah Nichols",
        address: "Troy,MI",
        tags: ["closthes", "stem"]
    },
    {
        user_id: "user2",
        img: "images/user2.jpg",
        name: "Jesus Weiss",
        address: "Fort Worth, TX",
        tags: ["headset", "gadget", "speed", "winter"]
    },
    {
        user_id: "user3",
        img: "images/user3.jpg",
        name: "Annie Rice",
        address: "Austin, TX",
        tags: ["road", "mountain", "trip", "earth", "nature"]
    },
    {
        user_id: "user4",
        img: "images/user4.jpg",
        name: "Robert Brower",
        address: "Cincinnati, OH",
        tags: ["Maintenance", "gears", "frames", "repair"]
    },
    {
        user_id: "user5",
        img: "images/user5.jpg",
        name: "Amy Campbell",
        address: "Warrior, AL",
        tags: ["music", "disks"]
    },
    {
        user_id: "user6",
        img: "images/user6.jpg",
        name: "Anthony S. Morin",
        address: "Lyndhurst, NJ",
        tags: ["vintage", "electric"]
    }


]


// for (let user of users) {
//     // console.log(user.name)
//     for (let key in user) {

//         if (key == 'tags') {
//             for (let tag of user[key])
//                 console.log("tag:" + tag)
//         }
//         else {
//             console.log(key + ":" + user[key]);
//         }
//     }
//     console.log("----------------------")
// }

// rendering HTML for each user (without tags information)
let $users = document.querySelector('.users');
$users.innerHTML = users.map(({ user_id, img, name, address }) => {
    return `
                <div class="user" id="${user_id}">
                    <img src=${img} alt="">
                    <div class="user_info">
                        <div class="name_address">
                            <span class="name">${name}</span>
                            <span class="address">${address}</span>
                        </div>
                        <div class="tags">
                            
                        </div>
                    </div>
                </div>
`
}).join('');


// Adding elements for tags
for (let user of users) {
    let user_tag = document.querySelector("#" + user["user_id"] + " .tags");
    for (let key in user) {
        if (key == 'tags') {
            for (let tag of user[key]) {
                let span_tag = document.createElement('span')
                span_tag.innerHTML = tag
                user_tag.appendChild(span_tag);
            }
        }

    }
}