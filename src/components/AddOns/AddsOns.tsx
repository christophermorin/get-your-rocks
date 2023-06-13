import AddOnCard from "./AddOnCard"

export default function AddOns() {
  return (
    <section className='container-medium'>
      <h2 className='text-2 addOn-header'>Addons Header</h2>
      <section className='addOn-cards-container'>
        {/* TODO:Add to db and map to populate cards instead */}
        <AddOnCard />
        <AddOnCard />
        <AddOnCard />
      </section>
    </section>
  )
}