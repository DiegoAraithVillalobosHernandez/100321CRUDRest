package mx.edu.utez.model.office;

import mx.edu.utez.service.ConnectionMySQL;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class OfficeDao {
    Connection con;
    PreparedStatement pstm;
    ResultSet rs;
    Statement stm;
    String query;

    public List<Office> findAll() {
        List<Office> listOffices = new ArrayList();
        try {
            con = ConnectionMySQL.getConnection();
            query = "SELECT * FROM offices;";
            stm = con.createStatement();
            rs = stm.executeQuery(query);
            while (rs.next()) {
                Office office = new Office();
                office.setOfficeCode(rs.getString("officeCode"));
                office.setCity(rs.getString("city"));
                office.setPhone(rs.getString("phone"));
                office.setAddressLine1(rs.getString("addressLine1"));
                office.setAddressLine2(rs.getString("addressLine2"));
                office.setState(rs.getString("state"));
                office.setCountry(rs.getString("country"));
                office.setPostalCode(rs.getString("postalCode"));
                office.setTerritory(rs.getString("territory"));

                listOffices.add(office);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return listOffices;
    }

    public Office findByOfficesNumber(String officeCode) {
        Office office = null;
        try {
            con = ConnectionMySQL.getConnection();
            query = "SELECT * FROM offices WHERE officeCode = ?";
            pstm = con.prepareStatement(query);
            pstm.setString(1, officeCode);
            rs = pstm.executeQuery();
            if (rs.next()) {
                office = new Office();
                office.setOfficeCode(rs.getString("officeCode"));
                office.setCity(rs.getString("city"));
                office.setPhone(rs.getString("phone"));
                office.setAddressLine1(rs.getString("addressLine1"));
                office.setAddressLine2(rs.getString("addressLine2"));
                office.setState(rs.getString("state"));
                office.setCountry(rs.getString("country"));
                office.setPostalCode(rs.getString("postalCode"));
                office.setTerritory(rs.getString("territory"));
            }
        } catch (SQLException | NullPointerException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return office;
    }

    public boolean saveOffices(Office office, boolean isCreated) {
        boolean state = false;
        try {
            con = ConnectionMySQL.getConnection();
            if (isCreated) {
                query = "INSERT INTO offices(officeCode, city, phone, addressLine1, addressLine2, state, country," +
                        "postalCode, territory) VALUES(?,?,?,?,?,?,?,?,?);";
                pstm = con.prepareStatement(query);
                pstm.setString(1, office.getOfficeCode());
                pstm.setString(2, office.getCity());
                pstm.setString(3, office.getPhone());
                pstm.setString(4, office.getAddressLine1());
                pstm.setString(5, office.getAddressLine2());
                pstm.setString(6, office.getState());
                pstm.setString(7, office.getCountry());
                pstm.setString(8, office.getPostalCode());
                pstm.setString(9, office.getTerritory());
                state = pstm.executeUpdate() == 1;
            } else {
                query = "UPDATE offices SET city = ?, phone = ?, addressLine1 = ?, addressLine2 = ?, " +
                        "state = ?, country = ?, postalCode = ?, territory = ?" +
                        "WHERE officeCode = ?";
                pstm = con.prepareStatement(query);
                pstm.setString(9, office.getOfficeCode());
                pstm.setString(1, office.getCity());
                pstm.setString(2, office.getPhone());
                pstm.setString(3, office.getAddressLine1());
                pstm.setString(4, office.getAddressLine2());
                pstm.setString(5, office.getState());
                pstm.setString(6, office.getCountry());
                pstm.setString(7, office.getPostalCode());
                pstm.setString(8, office.getTerritory());
                state = pstm.executeUpdate() == 1;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return state;
    }

    public boolean deleteOffices(String officeCode) {
        boolean state = false;
        try {
            con = ConnectionMySQL.getConnection();
            query = "DELETE FROM offices WHERE officeCode = ?;";
            pstm = con.prepareStatement(query);
            pstm.setString(1, officeCode);
            state = pstm.executeUpdate() == 1;
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return state;
    }

    public void closeConnections() {
        try {
            if (con != null) {
                con.close();
            }
            if (pstm != null) {
                pstm.close();
            }
            if (rs != null) {
                rs.close();
            }
            if (stm != null) {
                stm.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
