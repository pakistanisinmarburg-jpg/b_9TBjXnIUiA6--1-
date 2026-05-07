export interface Profile {
  id: string
  username: string | null
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  city: string
  created_at: string
}

export interface Group {
  id: string
  name: string
  description: string | null
  image_url: string | null
  category: string
  join_code: string
  member_count: number
  created_by: string
  created_at: string
}

export interface Event {
  id: string
  title: string
  description: string | null
  image_url: string | null
  location: string | null
  starts_at: string
  ends_at: string | null
  category: string
  group_id: string | null
}

export interface Message {
  id: string
  group_id: string | null
  sender_id: string
  content: string
  read_by: string[]
  created_at: string
  profiles?: Profile
}

export interface Listing {
  id: string
  type: 'housing' | 'job' | 'market'
  title: string
  description: string | null
  price: number | null
  currency: string
  images: string[]
  location: string | null
  user_id: string
  created_at: string
}