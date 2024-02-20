const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration -> MongoDB connected
const uri =
  'mongodb+srv://mern-book-store:Park15hoseok@cluster0.1ab2bzo.mongodb.net/BookInventory?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Create a collection of documents
    const Notice = client.db('Noticedb').collection('notices');
    const Faculty = client.db('Facultydb').collection('faculty');
    const Blog = client.db('Blogdb').collection('blogs');
    const Event = client.db('Eventdb').collection('events');
    const News = client.db('Newsdb').collection('news');
    // Insert a book to the database using the POST method
    app.post('/upload-notice', async (req, res) => {
      const data = req.body;
      const result = await Notice.insertOne(data);
      res.send(result);
    });


  // Insert a event to the database using the POST method
  app.post('/upload-event', async (req, res) => {
    const data = req.body;
    const result = await Event.insertOne(data);
    res.send(result);
  });

    // Insert a news to the database using the POST method
    app.post('/upload-news', async (req, res) => {
      const data = req.body;
      const result = await News.insertOne(data);
      res.send(result);
    });

    //INsert Faculty To Database
    app.post('/upload-faculty', async (req, res) => {
      const data = req.body;
      const result = await Faculty.insertOne(data);
      res.send(result);
    });
 //INsert Blog To Database
 app.post('/upload-blog', async (req, res) => {
  const data = req.body;
  const result = await Blog.insertOne(data);
  res.send(result);
});


    // Update a notic: PATCH or UPDATE method
    app.patch('/notice/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID:', id);
    
        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
        }
    
        const updateNoticeData = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            noticeTitle: updateNoticeData.noticeTitle,
            
            uploadDate: updateNoticeData.uploadDate,
        
            noticeDescription: updateNoticeData.noticeDescription,
            noticeUrl: updateNoticeData.noticeUrl,
          },
        };
        const options = { upsert: true };
    
        // Update
        const result = await Notice.updateOne(filter, updateDoc, options);
    
        if (result.modifiedCount > 0 || result.upsertedCount > 0) {
          // If the update was successful, retrieve the updated document
          const updatedNotice = await Notice.findOne(filter);
          res.send(updatedNotice);
        } else {
          res.status(404).send({ success: false, message: 'Book not found.' });
        }
      } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });





    // Update a event: PATCH or UPDATE method
    app.patch('/event/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID:', id);
    
        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
        }
    
        const updateEventData = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            EventTitle: updateEventData.EventTitle,
            
            EventDate: updateEventData.EventDate,
        
            EventDescription: updateEventData.EventDescription,
            EventUrl: updateEventData.EventUrl,
          },
        };
        const options = { upsert: true };
    
        // Update
        const result = await Event.updateOne(filter, updateDoc, options);
    
        if (result.modifiedCount > 0 || result.upsertedCount > 0) {
          // If the update was successful, retrieve the updated document
          const updatedEvent = await Event.findOne(filter);
          res.send(updatedEvent);
        } else {
          res.status(404).send({ success: false, message: 'Book not found.' });
        }
      } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });





    
    // Update a News: PATCH or UPDATE method
    app.patch('/news/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID:', id);
    
        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
        }
    
        const updateNewsData = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            NewsTitle: updateNewsData.NewsTitle,
            
            NewsDate: updateNewsData.NewsDate,
        
            NewsDescription: updateNewsData.NewsDescription,
            NewsUrl: updateNewsData.NewsUrl,
          },
        };
        const options = { upsert: true };
    
        // Update
        const result = await News.updateOne(filter, updateDoc, options);
    
        if (result.modifiedCount > 0 || result.upsertedCount > 0) {
          // If the update was successful, retrieve the updated document
          const updatedNews= await News.findOne(filter);
          res.send(updatedNews);
        } else {
          res.status(404).send({ success: false, message: 'Book not found.' });
        }
      } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });






    // Update a blog: PATCH or UPDATE method
    app.patch('/blog/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID:', id);
    
        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid blog ID format.', receivedID: id });
        }
    
        const updateBlogData = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            BlogTitle: updateBlogData.BlogTitle,
            authorName: updateBlogData.authorName,
            uploadDate: updateBlogData.uploadDate,
        
            BlogDescription: updateBlogData.BlogDescription,
            BlogUrl: updateBlogData.BlogUrl,
          },
        };
        const options = { upsert: true };
    
        // Update
        const result = await Blog.updateOne(filter, updateDoc, options);
    
        if (result.modifiedCount > 0 || result.upsertedCount > 0) {
          // If the update was successful, retrieve the updated document
          const updatedBlog = await Blog.findOne(filter);
          res.send(updatedBlog);
        } else {
          res.status(404).send({ success: false, message: 'Blog not found.' });
        }
      } catch (error) {
        console.error('Error updating Blog:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });




// Update a faculty: PATCH or UPDATE method
app.patch('/faculty/:id*', async (req, res) => {
  try {
    const id = req.params.id;
    console.log('Received ID:', id);

    // Check if the provided ID is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      console.log('Invalid ID Format');
      return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
    }

    const updateFacultyData = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: {
        facultyName: updateFacultyData.facultyName,
        
        imageURL: updateFacultyData.imageURL,
    
        category: updateFacultyData.category,
        facultySubject: updateFacultyData.facultySubject,
      },
    };
    const options = { upsert: true };

    // Update
    const result = await Faculty.updateOne(filter, updateDoc, options);

    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
      // If the update was successful, retrieve the updated document
      const updatedFaculty = await Faculty.findOne(filter);
      res.send(updatedFaculty);
    } else {
      res.status(404).send({ success: false, message: 'Book not found.' });
    }
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
  }
});



    //delete Notice

    app.delete('/notice/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID for deletion:', id);

        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
        }

        const filter = { _id: new ObjectId(id) };

        // Delete Notice
        const result = await Notice.deleteOne(filter);

        if (result.deletedCount > 0) {
          res.send({ success: true, message: 'Book deleted successfully.' });
        } else {
          res.status(404).send({ success: false, message: 'Book not found for deletion.' });
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });




    //delete Blog

    app.delete('/blog/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID for deletion:', id);

        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
        }

        const filter = { _id: new ObjectId(id) };

        // Delete Blog
        const result = await Blog.deleteOne(filter);

        if (result.deletedCount > 0) {
          res.send({ success: true, message: 'Blog deleted successfully.' });
        } else {
          res.status(404).send({ success: false, message: 'Blog not found for deletion.' });
        }
      } catch (error) {
        console.error('Error deleting Blog:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });



    //delete Faculty

    app.delete('/faculty/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID for deletion:', id);

        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
        }

        const filter = { _id: new ObjectId(id) };

        // Delete Faculty
        const result = await Faculty.deleteOne(filter);

        if (result.deletedCount > 0) {
          res.send({ success: true, message: 'Book deleted successfully.' });
        } else {
          res.status(404).send({ success: false, message: 'Book not found for deletion.' });
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });




    
    //delete Event

    app.delete('/event/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID for deletion:', id);

        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
        }

        const filter = { _id: new ObjectId(id) };

        // Delete Event
        const result = await Event.deleteOne(filter);

        if (result.deletedCount > 0) {
          res.send({ success: true, message: 'Book deleted successfully.' });
        } else {
          res.status(404).send({ success: false, message: 'Book not found for deletion.' });
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });


    
    //delete News

    app.delete('/news/:id*', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received ID for deletion:', id);

        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          console.log('Invalid ID Format');
          return res.status(400).send({ success: false, message: 'Invalid book ID format.', receivedID: id });
        }

        const filter = { _id: new ObjectId(id) };

        // Delete News
        const result = await News.deleteOne(filter);

        if (result.deletedCount > 0) {
          res.send({ success: true, message: 'Book deleted successfully.' });
        } else {
          res.status(404).send({ success: false, message: 'Book not found for deletion.' });
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });



 // Find notice by category
 app.get('/all-notice', async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    const result = await Notice.find(query).toArray();
    res.send(result);
  } catch (error) {
    console.error('Error finding books by category:', error);
    res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
  }
});

//to get single notice data

app.get("/notice/:id", async(req,res)=>{
  const id = req.params.id;
  const filter={_id: new ObjectId(id)};
  const result= await Notice.findOne(filter);
  res.send(result);
})



 // Find blog by category
 app.get('/all-blog', async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    const result = await Blog.find(query).toArray();
    res.send(result);
  } catch (error) {
    console.error('Error finding books by category:', error);
    res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
  }
});

//to get single blog data

app.get("/blog/:id", async(req,res)=>{
  const id = req.params.id;
  const filter={_id: new ObjectId(id)};
  const result= await Blog.findOne(filter);
  res.send(result);
})



    // Find Faculty by category
    app.get('/all-faculty', async (req, res) => {
      try {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }
        const result = await Faculty.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error('Error finding books by category:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });

    //to get Facultu  data

    app.get("/faculty/:id", async(req,res)=>{
      const id = req.params.id;
      const filter={_id: new ObjectId(id)};
      const result= await Faculty.findOne(filter);
      res.send(result);
    })

    

    // Find Event by category
    app.get('/all-event', async (req, res) => {
      try {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }
        const result = await Event.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error('Error finding books by category:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });

    //to get Event  data

    app.get("/event/:id", async(req,res)=>{
      const id = req.params.id;
      const filter={_id: new ObjectId(id)};
      const result= await Event.findOne(filter);
      res.send(result);
    })


    

    // Find News by category
    app.get('/all-news', async (req, res) => {
      try {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }
        const result = await News.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error('Error finding books by category:', error);
        res.status(500).send({ success: false, message: 'Internal server error.', error: error.message });
      }
    });

    //to get News  data

    app.get("/news/:id", async(req,res)=>{
      const id = req.params.id;
      const filter={_id: new ObjectId(id)};
      const result= await News.findOne(filter);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    // Close the MongoDB connection when the application exits
    process.on('SIGINT', async () => {
      console.log('Closing MongoDB connection');
      await client.close();
      process.exit();
    });
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});