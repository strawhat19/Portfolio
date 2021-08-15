// Reddit API

// Fetches

// Reddit Memes
var redditMemeRequestURL = 'https://www.reddit.com/r/memes/new.json?limit=10';

// Reddit Memes Fetch
fetch(redditMemeRequestURL)
.then(response => {
    return response.json();
}).then(data => {
    console.log('Reddit Meme API Data Is:');
    console.log(data);
    for (var i = 0; i < data.data.children.length; i++) {
        var reddit = $('.memes');
        var redditURL = 'https://www.reddit.com';
        var memeImages = data.data.children[i].data.url;
        var memeTitle = data.data.children[i].data.title;
        var memeAuthor = data.data.children[i].data.author;
        var memeLink = data.data.children[i].data.permalink;
        var authorLink = redditURL+'/user/'+memeAuthor;
        var memeElement = $(`
        <div class="redditMemeElement element">
            <div class="memeTitle elementTitle">
                <div class="titleRow">
                    <span class="index">${i+1 + '. '}</span>
                    <a class="memeLink elementLink" target="_blank" href="${redditURL+memeLink}">${memeTitle}</a>
                </div>
                <span class="byLine">By 
                        <a class="authorLink memeLink elementLink" href="${authorLink}" target="_blank">${memeAuthor}</a>
                </span>
            </div>
            <a class="memeLink elementLink" target="_blank" href="${redditURL+memeLink}">
                <img class="redditMeme" src="${memeImages}">
            </a>
        </div>
        `);
        reddit.append(memeElement);
    }
})
