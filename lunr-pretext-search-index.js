var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "quiz-8",
  "level": "1",
  "url": "quiz-8.html",
  "type": "Section",
  "number": "1",
  "title": "Week 8 Quiz",
  "body": " Week 8 Quiz  Suppose that is continuous and satisfies Prove that .  "
},
{
  "id": "quiz-9",
  "level": "1",
  "url": "quiz-9.html",
  "type": "Section",
  "number": "2",
  "title": "Week 9 Quiz",
  "body": " Week 9 Quiz   Suppose that . Compute .  Note that this is the same as in   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
