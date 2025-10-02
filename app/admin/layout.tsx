"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import Link from "next/link";
import "./admin.css";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if user is not authenticated AND not on login page
    if (
      !user &&
      typeof window !== "undefined" &&
      !window.location.pathname.includes("/login")
    ) {
      router.push("/admin/login");
    }
  }, [user, router]);

  // Show loading spinner while checking authentication
  if (
    !user &&
    typeof window !== "undefined" &&
    !window.location.pathname.includes("/login")
  ) {
    return (
      <div className="admin-layout">
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Redirecting to login...</p>
          </div>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  return (
    <div className="admin-layout">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/admin" className="navbar-brand">
            eTus Admin
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link href="/admin" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/products/create" className="nav-link">
                  Add Product
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-link nav-link dropdown-toggle text-white"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                >
                  {user?.username || "User"}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container-fluid py-4">{children}</main>
    </div>
  );
};

export default AdminLayout;
