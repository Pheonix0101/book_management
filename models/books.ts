import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
  book_id: number;
  title: string;
  author: string;
  summary: string;
}

const bookSchema: Schema<IBook> = new Schema({
  book_id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

const BookModel = mongoose.model<IBook>("books", bookSchema);

export default BookModel;
