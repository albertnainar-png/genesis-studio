import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import HeroSection from "../components/dashboard/HeroSection";
import WorkspaceStats from "../components/dashboard/WorkspaceStats";
import QuickCreate from "../components/dashboard/QuickCreate";
import RecentProjects from "../components/dashboard/RecentProjects";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function Dashboard() {
  return (
    <div className="flex h-screen flex-col bg-[#06060A] text-white">

      {/* Header */}

      <Header />

      {/* Main Layout */}

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}

        <Sidebar />

        {/* Content */}

        <main className="flex-1 overflow-y-auto">

          <div className="mx-auto max-w-[1600px] px-10 py-10">

            {/* Hero */}

            <HeroSection />

            {/* Stats */}

            <section className="mt-10">

              <WorkspaceStats />

            </section>

            {/* Creative Studios */}

            <section className="mt-12">

              <QuickCreate />

            </section>

            {/* Bottom Area */}

            <section className="mt-12 grid gap-8 xl:grid-cols-[2fr_1fr]">

              <RecentProjects />

              <ActivityFeed />

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;