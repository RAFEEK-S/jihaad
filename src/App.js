import Card from "./Card";

function App() {
  let data = [
    {
      plan:"Free",
      price:0,
      users:"Single User",
      usersEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"Plus",
      price:9,
      users:"5 User",
      usersEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"Pro",
      price:49,
      users:"Unlimited User",
      usersEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:true
    }
  ]
  return <div>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
     }
    
      </div>
  </div>
</section>
    </div>
  
}

export default App;
