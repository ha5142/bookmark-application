let bookmarks = []; // in memory space
let currentId = 1;

export async function addBookmark(req,res,next){

try {
const {category, url} = req.body;
if(!category || !url) {
   return res.status(400).json({
    error : "categort required"
   })
   }

const newBookmark = {id: currentId++, category, url};
bookmarks.push(newBookmark);
return res.status(200).json(newBookmark);

} catch(error) {
   return res.status(400).json({
    error: "error in added bookmarks"
});

}
}

export async function deleteBookmark(req,res,next){

try {


const  {id} = req.params;
const bookmarkIndex  = bookmarks.findIndex(bookmark => bookmark.id == id);
if(bookmarkIndex == -1) {
    return res.status(400).json({ error : "bookmark not found"});
}
bookmarks.splice(bookmarkIndex, 1);
return res.status(200).json({msg: "deleted bookmark sucessfuly"});
} catch(error) {
    return res.status(405).json({error : "an error occured while adding bookmark"})
}
}

export async function getAllBookmarks(req,res,next){

res.json(bookmarks);
}




