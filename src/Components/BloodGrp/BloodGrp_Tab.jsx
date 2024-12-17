import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const BloodGrp_Tab = () => {
    const { theme } = useTheme();
    const [bloodCampaignData, setBloodCampaignData] = useState([]);
    const [activeTab, setActiveTab] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch data from the API
    const fetchBloodCampaignData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://hafeez-para-server-site.vercel.app/bloodDonate");

            if (!response.ok) {
                throw new Error("Failed to fetch blood campaign data");
            }

            const data = await response.json();
            // Filter out data with null values in required fields
            const filteredData = data.filter(
                (item) =>
                    item.Name &&
                    item.Age &&
                    item.Mobile &&
                    item.BloodGroup
            );
            setBloodCampaignData(filteredData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBloodCampaignData();
    }, []);

    // Formatting the mobile number
    const formatMobileNumber = (mobile) => {
        return mobile.toString().replace(/(\d{2})(\d{7})/, "$1-$2");
    };

    // Filter data based on the active tab
    const filterData = () => {
        if (activeTab === "All") {
            return bloodCampaignData;
        }
        return bloodCampaignData.filter((data) => data.BloodGroup === activeTab);
    };

    return (
        <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-700'}`}>
            {/* Loading State */}
            {loading && <p>Loading data...</p>}
            {/* Error Handling */}
            {error && <p className="text-red-500">Error: {error}</p>}

            {/* Tabs for Filtering */}
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                        className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                >
                    <Tab
                        key="All"
                        value="All"
                        onClick={() => setActiveTab("All")}
                        className={activeTab === "All" ? "text-gray-900" : ""}
                    >
                        All
                    </Tab>
                    {Array.from(new Set(bloodCampaignData.map((data) => data.BloodGroup))).map((label) => (
                        <Tab
                            key={label}
                            value={label}
                            onClick={() => setActiveTab(label)}
                            className={activeTab === label ? "text-gray-900" : ""}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    <TabPanel value={activeTab}>
                        <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Age</th>
                                    <th className="py-2 px-4 border">Mobile</th>
                                    <th className="py-2 px-4 border">Blood Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterData().map(({ _id, Name, Age, Mobile, BloodGroup }) => (
                                    <tr key={_id}>
                                        <td className="py-2 px-4 border">{Name}</td>
                                        <td className="py-2 px-4 border">{Age}</td>
                                        <td className="py-2 px-4 border">{formatMobileNumber(Mobile)}</td>
                                        <td className="py-2 px-4 border">{BloodGroup}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default BloodGrp_Tab;
