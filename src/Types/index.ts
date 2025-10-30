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
export interface IPackage {
  _id: string;
  name: string; // e.g., "Bridal Glow Package"
  servicesNames: string[]; // list of service IDs or names
  description: string; // brief overview of the package
  totalPrice: number; // sum of all included services (before discount)
  discount?: number; // auto-calculated or manual
  duration: string; // e.g., "3 hrs 30 mins"
  image: string; // banner image for package
  rating?: number; // average from feedback
  totalBookings?: number;
  products?: string[]; // e.g., ["Free consultation", "Priority booking"]
  benefits?: string[]; // e.g., ["Free consultation", "Priority booking"]
  availableStaff?: string[]; // list of staff IDs or names
  preparation?: string; // e.g., "Stay hydrated, avoid caffeine"
  status?: "Active" | "Unavailable" | "Coming Soon";
}
export interface IBlog {
  _id: string;
  title: string;
  slug?: string; // SEO-friendly URL
  author: string; // could be userId or name
  category: string; // e.g., "Skincare", "Makeup", "Haircare"
  tags?: string[]; // ["bridal", "glow", "tips"]
  description: string; // full content (HTML or Markdown)
  image: string; // cover image URL
  likes: number;
  views?: number;
  comments?: IComment[];
  status?: "Draft" | "Published" | "Archived";
  readingTime?: string | number; // e.g., "4 min read"
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IComment {
  user: string;
  comment: string;
  date: Date;
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

export interface ITeammate {
  id: number;
  name: string;
  age: number;
  gender: string;
  experience: string;
  expertIn: string[];
  rating: number;
  availableDays: string[];
  contact: string;
  photo: string;
  bio: string;
  status: string;
}

export interface ICategory {
  _id: string;
  name: string; // e.g., "Hair Care", "Skin Treatment"
  description?: string; // short description for category section
  serviceCount?: number; // total services in this category
  packageCount?: number; // total packages in this category
  isActive?: boolean; // toggle visibility
  isDeleted?: boolean; // soft delete flag
  createdAt?: Date;
  updatedAt?: Date;
}
