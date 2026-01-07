import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '../Pages/LandingPage.tsx'

export const Route = createFileRoute('/')({
  component: LandingPage,
})
