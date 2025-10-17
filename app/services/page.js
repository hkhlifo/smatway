import ServicesGrid from "../components/ServicesGrid";

export default function ServicesPage() {
    return (
        <main className="bg-white text-[#2B2B2B] font-poppins">
            <section className="py-24 px-6 bg-gradient-to-br from-white to-[#F9F9F9] text-center">
                <h1 className="text-3xl font-semibold text-[#1E4E9C]">
                    Our Services
                </h1>
                <p className="mt-6 text-lg max-w-3xl mx-auto">
                    Smart Way Consultancy offers a full spectrum of business solutions—from setup to scaling. Explore our core service categories below.
                </p>
            </section>

            <ServicesGrid />
        </main>
    );
}