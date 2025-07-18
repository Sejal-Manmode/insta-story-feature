var arr = [
    {
        dp:"https://images.unsplash.com/photo-1617788600025-215aa836ab4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1dGUlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1577333715735-8fcb0359d906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsJTIwbWFsZXxlbnwwfDB8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYWxlfGVufDB8MXwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1752517656766-b0c169f6ea66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1752654976763-e9decfafe58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1676229266507-3e58c27af8a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBtYWxlfGVufDB8MHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1744018195752-276f4f77cc7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
    },
]
var stories = document.querySelector("#stories");
var clutter = '';
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

stories.innerHTML = clutter;

stories.addEventListener("click",function(info){
    document.querySelector("#full-screen").style.display = "block";

    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[info.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = 'none';
    },3000);
})