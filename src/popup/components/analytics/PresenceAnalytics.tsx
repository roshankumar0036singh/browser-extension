import React, { useEffect, useState } from "react";
import { fetchWeeklyTabUsage } from "../../../services/api";
import { useAuth } from "../../context/AuthContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const PresenceAnalytics: React.FC = () => {
    const { user } = useAuth();
    const [tabUsage, setTabUsage] = useState<{ date: string; domains: { domain: string; seconds: number }[] }[]>([]);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);

    useEffect(() => {
        if (!user) return;
        fetchWeeklyTabUsage(user.token).then(res => {
            setTabUsage(res.data || []);
            if (res.data && res.data.length > 0) setSelectedDay(res.data[res.data.length - 1].date);
        });
    }, [user]);

    const weeklyData = tabUsage.map(day => ({
        date: day.date,
        totalSeconds: day.domains.reduce((sum, d) => sum + d.seconds, 0),
    }));

    const todayData = weeklyData.length ? weeklyData[weeklyData.length - 1] : null;
    const selectedPresence = weeklyData.find(d => d.date === selectedDay);
    const selectedTabUsage = tabUsage.find(d => d.date === selectedDay);

    const topTab = selectedTabUsage?.domains?.length
        ? [...selectedTabUsage.domains].sort((a, b) => b.seconds - a.seconds)[0]
        : null;

    function formatDuration(seconds: number) {
        const hrs = Math.floor(seconds / 3600);
        const min = Math.floor((seconds % 3600) / 60);
        if (hrs > 0) {
            return `${hrs} hr${hrs > 1 ? 's' : ''}${min > 0 ? ` ${min} min` : ''}`;
        }
        return `${min} min`;
    }

    return (
        <div>
            <div className="mb-4 p-4 bg-blue-50 rounded-lg flex flex-col items-center">
                <div className="text-sm text-gray-500">
                    {selectedDay === todayData?.date ? "Today's Online Time" : `${selectedDay} Online Time`}
                </div>
                <div className="text-3xl font-bold text-blue-700">
                    {formatDuration(selectedPresence?.totalSeconds || 0)}
                </div>
            </div>

            <div className="mb-4">
                <div className="font-semibold mb-2 text-gray-700">Weekly Online Time</div>
                <ResponsiveContainer width="100%" height={180}>
                    <BarChart
                        data={weeklyData.map(d => ({
                            ...d,
                            hours: +(d.totalSeconds / 3600).toFixed(2),
                        }))}
                        onClick={state => {
                            if (state && state.activeLabel) setSelectedDay(state.activeLabel);
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
                        <Tooltip formatter={v => `${v} hrs`} />
                        <Bar dataKey="hours" fill="#3182ce" />
                    </BarChart>
                </ResponsiveContainer>
                <div className="text-xs text-gray-500 mt-1">
                    Click a bar to view tab usage for that day.
                </div>
            </div>

            <div className="mb-2">
                <div className="font-semibold mb-2 text-gray-700">
                    {selectedDay === todayData?.date ? "Today's" : `${selectedDay}'s`} Tab Usage
                </div>
                {topTab && (
                    <div className="mb-2 p-2 bg-green-50 rounded text-green-700 font-semibold">
                        Most used: {topTab.domain} ({formatDuration(topTab.seconds)})
                    </div>
                )}
                <div className="space-y-1">
                    {selectedTabUsage?.domains?.length ? (
                        selectedTabUsage.domains
                            .sort((a, b) => b.seconds - a.seconds)
                            .map(tab => (
                                <div key={tab.domain} className="flex justify-between text-sm bg-gray-100 rounded px-2 py-1">
                                    <span>{tab.domain}</span>
                                    <span>{formatDuration(tab.seconds)}</span>
                                </div>
                            ))
                    ) : (
                        <div className="text-gray-400 text-sm">No tab usage data for this day.</div>
                    )}
                </div>
                <div className="mt-2 text-xs text-gray-500">
                    Total online time: {formatDuration(selectedPresence?.totalSeconds || 0)}
                </div>
            </div>
        </div>
    );
};

export default PresenceAnalytics;