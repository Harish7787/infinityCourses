import React, { useState } from 'react';
import { Shield, Bell, Settings, Save, User } from 'lucide-react'; // Optional: install lucide-react for icons

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    siteName: 'My Awesome Platform',
    maintenanceMode: false,
    allowedDomains: 'example.com, test.com',
    twoFactorAuth: true,
    passwordExpiryDays: 90,
    emailNotifications: true,
    slackAlerts: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Replace this with your API call to save settings
    console.log('Saving admin settings to database:', settings);
    alert('Settings updated successfully!');
  };

  // Sidebar navigation items
  const tabs = [
    { id: 'general', name: 'General Settings', icon: Settings },
    { id: 'security', name: 'Security & Access', icon: Shield },
    { id: 'notifications', name: 'System Alerts', icon: Bell },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Settings Form Panel */}
      <main className="flex-1 p-10 max-w-4xl">
        <form onSubmit={handleSave} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          
          {/* TAB 1: GENERAL SETTINGS */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">General Platform Settings</h3>
                <p className="text-sm text-gray-500">Configure global metadata and public visibility.</p>
              </div>
              <hr className="border-gray-100" />
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                  <input
                    type="text"
                    name="siteName"
                    value={settings.siteName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div>
                    <label className="font-medium text-yellow-800 block">Maintenance Mode</label>
                    <span className="text-xs text-yellow-700">Offline the public platform for scheduled updates.</span>
                  </div>
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SECURITY SETTINGS */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Security & Authentication</h3>
                <p className="text-sm text-gray-500">Manage global security policies and session rules.</p>
              </div>
              <hr className="border-gray-100" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-700 block">Enforce 2FA</label>
                    <span className="text-xs text-gray-500">Require Two-Factor Authentication for all admin accounts.</span>
                  </div>
                  <input
                    type="checkbox"
                    name="twoFactorAuth"
                    checked={settings.twoFactorAuth}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password Expiration (Days)</label>
                  <input
                    type="number"
                    name="passwordExpiryDays"
                    value={settings.passwordExpiryDays}
                    onChange={handleChange}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Allowed CORS Domains</label>
                  <input
                    type="text"
                    name="allowedDomains"
                    value={settings.allowedDomains}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="comma-separated list"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: NOTIFICATION SETTINGS */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">System Alerts & Notifications</h3>
                <p className="text-sm text-gray-500">Control where system logs and critical warnings are routed.</p>
              </div>
              <hr className="border-gray-100" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-700 block">Email Admin Alerts</label>
                    <span className="text-xs text-gray-500">Send high-priority system crash reports to the main admin email.</span>
                  </div>
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={settings.emailNotifications}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-700 block">Slack Webhook Integrations</label>
                    <span className="text-xs text-gray-500">Push real-time system events directly to Slack.</span>
                  </div>
                  <input
                    type="checkbox"
                    name="slackAlerts"
                    checked={settings.slackAlerts}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Form Action Footer */}
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-colors text-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}