export default function upload (req, res) {
  try{
    if(!req.files){
      res.send({
        status: false,
        message: "No file upload"
      });
    }else{
      let field = req.files.field;

      field.mv('./uploads/' + field.name);

      res.send({
        status: true,
        message: "File is upload",
        data: {
          name: field.name,
          mimetype: field.mimetype,
          size: field.size
        }
      });
    }
  }catch (err){
    res.status(500).send(err);
  }
}