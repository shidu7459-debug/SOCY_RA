let likes = [0, 0, 0];

function likePost(index) {
    likes[index]++;
    document.getElementById("likes" + index).innerText =
        likes[index] + " likes";
}

