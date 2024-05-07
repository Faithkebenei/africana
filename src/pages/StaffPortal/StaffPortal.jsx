import React, { useState } from "react";
import styles from "./StaffPortal.module.scss";
import Button from "../../components/Button/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
// import "bootstrap/dist/css/bootstrap.min.css";

import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import "jspdf-autotable";

import {
  FaEnvelopeCircleCheck,
  FaUserTie,
  FaUsers,
  FaPlus,
  FaPenToSquare,
} from "react-icons/fa6";

const StaffPortal = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [editUsername, setEditUsername] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  //Handling modals
  const handleShowAddUserModal = () => setShowAddUserModal(true);
  const handleShowEditUserModal = () => setShowEditUserModal(true);
  const handleCloseAddUserModal = () => setShowAddUserModal(false);
  const handleCloseEditUserModal = () => setShowEditUserModal(false);

  const addUser = () => {};

  const handleLogout = () => {};
  const navs = [
    {
      index: 1,
      name: "Newsletter",
      icon: <FaEnvelopeCircleCheck size="2rem" />,
      link: "",
    },
    { index: 2, name: "Careers", icon: <FaUserTie size="2rem" />, link: "" },
    { index: 3, name: "Users", icon: <FaUsers size="2rem" />, link: "" },
  ];

  //saving data as CSV
  const handleCSV = () => {
    const table = document.querySelector("#tableId");
    if (!table) return;

    const headerCells = Array.from(table.querySelectorAll("th"));

    const filteredRows = Array.from(table.getElementsByTagName("tr")).filter(
      (row) => {
        const cells = Array.from(row.querySelectorAll("td"));
        return cells.some((cell) => cell.textContent.toLowerCase());
      }
    );

    const csvData = [];

    const headerRow = headerCells
      .map((header) => `"${header.textContent}"`)
      .join(",");
    csvData.push(headerRow);

    filteredRows.forEach((row) => {
      const rowData = Array.from(row.querySelectorAll("td"))
        .map((cell) => `"${cell.textContent}"`)
        .join(",");
      csvData.push(rowData);
    });

    const blob = new Blob([csvData.join("\n")], { type: "text/csv" });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "africana.csv";
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  //saving data as PDF
  const handlePDF = () => {
    const table = document.querySelector("#tableId");
    const pdf = new jsPDF();
    pdf.autoTable({ html: table });
    pdf.save("africana.pdf");
  };

  //saving data as Excel
  const handleExcel = () => {
    const table = document.querySelector("#tableId");
    const tableData = [];
    const headerCells = Array.from(table.querySelectorAll("th"));

    const rows = Array.from(table.getElementsByTagName("tr")).filter((row) => {
      const cells = Array.from(row.querySelectorAll("td"));
      return cells.some((cell) => cell.textContent.toLowerCase());
    });

    const headerRow = headerCells.map((header) => `${header.textContent}`);
    tableData.push(headerRow);

    rows.forEach((row) => {
      const rowData = [];
      const cells = row.querySelectorAll("td, th");
      cells.forEach((cell) => {
        rowData.push(`${cell.innerText}`);
      });
      tableData.push(rowData);
    });

    const ws = XLSX.utils.aoa_to_sheet(tableData);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, "africana.xlsx");
  };
  return (
    <div>
      <div className={styles.body}>
        <div className={styles.navBar}>
          <div className={styles.button}>
            <Button
              color="#ffffff"
              text="Log out"
              clicked={handleLogout}
              bgColor="#ff7c36"
            />
          </div>
        </div>
        <div className={styles.sideBar}>
          <div className={styles.logoContainer}>
            <p className={styles.first}>Africana</p>
            <p className={styles.second}>Hotel Bar & Resort</p>
          </div>
          <div className={styles.navigations}>
            <ul>
              {navs.map((nav) => (
                <li
                  onClick={() => setActiveNav(nav.index)}
                  style={{
                    backgroundColor:
                      activeNav === nav.index ? "#FAFAFA" : "#ff7c36",
                    color: activeNav === nav.index ? "#ff7c36" : "#ffffff",
                  }}
                >
                  {nav.icon}
                  <h4>{nav.name}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.users}>
            <div className={styles.newUser} onClick={handleShowAddUserModal}>
              <FaPlus />
              <p>New User</p>
            </div>
            <div className={styles.downloads}>
              <button className={styles.csv} onClick={handleCSV}>
                CSV
              </button>
              <button className={styles.excel} onClick={handleExcel}>
                EXCEL
              </button>
              <button className={styles.pdf} onClick={handlePDF}>
                PDF
              </button>
            </div>
            <div className={styles.table}>
              <section className={styles.tableBody}>
                <Table bordered hover id="tableId">
                  <thead>
                    <tr>
                      <th>User ID / Edit</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Added By</th>
                      <th>Date Added</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td onClick={handleShowEditUserModal}>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0)">
                          <FaPenToSquare /> 2001
                        </a>
                      </td>
                      <td>Faith Kebenei</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>faithkebs16@gmail.com</td>
                      <td>16/07/2000</td>
                    </tr>
                  </tbody>
                </Table>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Adding a user */}
      <Modal show={showAddUserModal} onHide={handleCloseAddUserModal}>
        <div className={`${styles.modalBodyCont} ${styles.salesModal}`}>
          {/* <ToastContainer position="top-center" /> */}
          <div className={styles.modalHeader}>
            <h4>
              <FaUsers /> Add User
            </h4>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalBodyForm}>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  name="username"
                  className="form-control"
                  id="username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  className="form-control"
                  id="email"
                />
              </div>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button
              style={{ backgroundColor: "#C4233C" }}
              onClick={handleCloseAddUserModal}
            >
              Close
            </button>
            <button style={{ backgroundColor: "#00A5A2" }} onClick={addUser}>
              Add
            </button>
          </div>
        </div>
      </Modal>

      {/* Updating a user */}
      <Modal show={showEditUserModal} onHide={handleCloseEditUserModal}>
        <div className={`${styles.modalBodyCont} ${styles.salesModal}`}>
          {/* <ToastContainer position="top-center" /> */}
          <div className={styles.modalHeader}>
            <h4>
              <FaUsers /> Edit User
            </h4>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalBodyForm}>
              <div className="form-group">
                <label htmlFor="editUsername">Name</label>
                <input
                  type="text"
                  value={editUsername}
                  onChange={(e) => {
                    setEditUsername(e.target.value);
                  }}
                  name="editUsername"
                  className="form-control"
                  id="editUsername"
                />
              </div>

              <div className="form-group">
                <label htmlFor="editEmail">Email</label>
                <input
                  type="text"
                  value={editEmail}
                  onChange={(e) => {
                    setEditEmail(e.target.value);
                  }}
                  name="editEmail"
                  className="form-control"
                  id="editEmail"
                />
              </div>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button
              style={{ backgroundColor: "#C4233C" }}
              onClick={handleCloseEditUserModal}
            >
              Close
            </button>
            <button style={{ backgroundColor: "#00A5A2" }} onClick={addUser}>
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StaffPortal;
