import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <main className="h-[200vh] pt-[144px] px-[8px]">
      <div className="flex items-center justify-center flex-col">
        <div
          className={`duration-[450ms] transition-all p-[1px] rounded-3xl bg-backgroundFundraise flex items-center justify-center`}
        >
          <button
            className="rounded-3xl text-[14px] 
          px-[14px] py-[4px] relative overflow-hidden font-light
           bg-[#050520] hover:shadow-boxShadowFundraise transition-all duration-[450ms] 
      "
          >
            <span className="text-transparent bg-backgroundPpy  bg-clip-text">
              Announcing our $1.4M Fundraise
            </span>
            <div className="absolute w-full h-10 bg-[#d49eff4d] top-6 rounded-full left-0 blur-md"></div>
          </button>
        </div>
        <h1 className="text-center text-[44px] leading-[52px] lg:text-[72px] lg:leading-[80px] font-medium mt-[16px]">
          <span className="text-[#E2E8FF]">
            Dimension is <br className="lg:hidden" />
            the new
          </span>{" "}
          <br className="md:hidden lg:block" />
          <span className="lg:hidden">
            <span className="text-[#E2E8FF] lg:text-transparent lg:bg-clip-text lg:bg-backgroundPpy">
              standard
              <br className="lg:hidden " />
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-backgroundPpy font-semibold">
              for collaboration
            </span>
          </span>
          <span className="hidden lg:inline">
            <span className="text-transparent bg-clip-text bg-backgroundPpy font-semibold">
              standard for collaboration
            </span>
          </span>
        </h1>

        <span className="text-[18px] text-[#e2e8ffbf] mt-[18px] lg:mt-[20px] text-center">
          Chat, code, cloud, deployments, and more.
        </span>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
