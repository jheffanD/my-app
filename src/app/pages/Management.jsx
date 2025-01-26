import profileData from "./profileData.json"; // Pastikan file JSON berisi data profil

export default function Management() {
    const { name, job, address } = profileData; // Mengambil data dari file JSON

    return (
        <div className="bg-white text-black font-extrabold p-6 flex flex-col rounded-xl mr-2">
            <div className="flex items-start bg-gray-100 pl-5 rounded-md h-32">
                {/* Foto */}
                <img
                    src="https://assets.aceternity.com/manu.png"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full mr-6 mt-4"
                />

                {/* Informasi Profil */}
                <div className="mt-4 text-black">
                    <h1 className="text-lg font-medium mb-3 mt-2">{name}</h1>
                    <p className="font-normal ">{job}</p>
                    <p className="font-normal ">{address}</p>
                </div>
            </div>

        </div>
    );
}
