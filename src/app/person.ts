export interface Root {
    page: number
    results: Person[]
    total_pages: number
    total_results: number
  }
  
  export interface Person {
    id: number
    name: string
    original_name: string
    media_type: string
    adult: boolean
    popularity: number
    gender: number
    known_for_department: string
    profile_path: string
  }