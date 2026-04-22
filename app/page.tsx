import CapacityDevelopment from '@/components/CapacityDevelopment'
import CooperationTraining from '@/components/CooperationTraining'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import IndividualTraining from '@/components/IndividualTraining'
import LMSSection from '@/components/LMSSection'
import ManagementProgram from '@/components/ManagementProgram'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import TrainingConsultant from '@/components/TrainingConsultant'
import TransformationHub from '@/components/TransformationHub'
import WorkTogether from '@/components/WorkTogether'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LMSSection />
      <CooperationTraining />
      <IndividualTraining />
      <CapacityDevelopment />
      <ManagementProgram />
      <TransformationHub />
      <TrainingConsultant />
      <CTABand />
      <Testimonials />
      <WorkTogether />
      <Footer />
    </>
  )
}
