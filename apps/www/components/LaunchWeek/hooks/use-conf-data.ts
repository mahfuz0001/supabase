import { Session, SupabaseClient } from '@supabase/supabase-js'
import { createContext, useContext } from 'react'

export type TicketState = 'registration' | 'ticket' | 'loading'

export type UserData = {
  id?: string
  email?: string
  ticketNumber?: number
  username?: string
  name?: string
  golden?: boolean
  referrals?: number
  bg_image_id?: number
  metadata?: {
    role?: string
    company?: string
    location?: string
  }
  sharedOnTwitter?: string
  sharedOnLinkedIn?: string
}

type ConfDataContextType = {
  supabase: SupabaseClient | null
  session: Session | null
  userData: UserData
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
  ticketState: TicketState
  setTicketState: React.Dispatch<React.SetStateAction<TicketState>>
}

export const ConfDataContext = createContext<ConfDataContextType | null>(null)

export default function useConfData() {
  const result = useContext(ConfDataContext)
  if (!result) {
    throw new Error()
  }
  return result
}
