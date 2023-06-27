function getArticleGenerator(articles) {
    const resultContent = document.getElementById("content");
    const articleCopies = [...articles];

    return () => {
        const article = document.createElement("article");
        const articleContend = articleCopies.shift();
        article.textContent = articleContend;
        if (articleContend) {
            resultContent.appendChild(article);
        }
    }
}
