

export interface IPrimaryButtonProps {
  label: string;
  func?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export interface IService {
  _id: string; // or string if coming from MongoDB ObjectId
  name: string;
  description: string;
  category: string; // e.g., Hair, Skin, Nails
  price: number;
  discount?: number; // optional, some services may not have discount
  duration: string; // "50 min", "1 hr"
  image: string; // image URL or path
  rating?: number; // optional, if no reviews yet
  totalOrder?: number; // optional, total bookings count
  products?: string[]; // products used in the service
  benefits?: string[]; // customer benefits
  availableStaff?: string[]; // staff names for booking
  slots?: string[]; // available booking times
  preparation?: string; // instructions for customer
  status?: string; // service availability
}
export interface IClientReview {
  _id: string; // MongoDB ObjectId as string
  customerName: string;
  customerImage?: string; // optional profile picture
  profession: string; // e.g., Student, Engineer
  rating: number; // 1–5 stars
  comment: string;
  date: string; // ISO string or formatted date
}
