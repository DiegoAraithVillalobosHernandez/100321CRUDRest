package mx.edu.utez.model.product_line;

import mx.edu.utez.service.ConnectionMySQL;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductLineDao {
    Connection con;
    PreparedStatement pstm;
    ResultSet rs;
    Statement stm;
    String query;

    public List<ProductLine> findAll() {
        List<ProductLine> listProductLine = new ArrayList();
        try {
            con = ConnectionMySQL.getConnection();
            query = "SELECT * FROM productlines;";
            stm = con.createStatement();
            rs = stm.executeQuery(query);
            while (rs.next()) {
                ProductLine prodLines = new ProductLine();
                prodLines.setProductLine(rs.getString("productLine"));
                prodLines.setTextDescription(rs.getString("textDescription"));
                prodLines.setHtmlDescription(rs.getString("htmlDescription"));
                prodLines.setImage(rs.getString("image"));

                listProductLine.add(prodLines);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return listProductLine;
    }

    public ProductLine findByProductLineNumber(String productLine) {
        ProductLine prodLines = null;
        try {
            con = ConnectionMySQL.getConnection();
            query = "SELECT * FROM productlines WHERE productLine = ?";
            pstm = con.prepareStatement(query);
            pstm.setString(1, productLine);
            rs = pstm.executeQuery();
            if (rs.next()) {
                prodLines = new ProductLine();
                prodLines.setProductLine(rs.getString("productLine"));
                prodLines.setTextDescription(rs.getString("textDescription"));
                prodLines.setHtmlDescription(rs.getString("htmlDescription"));
                prodLines.setImage(rs.getString("image"));
            }
        } catch (SQLException | NullPointerException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return prodLines;
    }

    public boolean saveProductLine(ProductLine prodLines, boolean isCreated) {
        boolean state = false;
        try {
            con = ConnectionMySQL.getConnection();
            if (isCreated) {
                query = "INSERT INTO productlines(productLine, textDescription," +
                        "htmlDescription, image) VALUES(?,?,?,?);";
                pstm = con.prepareStatement(query);
                pstm.setString(1, prodLines.getProductLine());
                pstm.setString(2, prodLines.getTextDescription());
                pstm.setString(3, prodLines.getHtmlDescription());
                pstm.setString(4, prodLines.getImage());
                state = pstm.executeUpdate() == 1;
            } else {
                query = "UPDATE productlines SET textDescription = ?, htmlDescription = ?, image = ? " +
                        "WHERE productLine = ?";
                pstm = con.prepareStatement(query);
                pstm.setString(4, prodLines.getProductLine());
                pstm.setString(1, prodLines.getTextDescription());
                pstm.setString(2, prodLines.getHtmlDescription());
                pstm.setString(3, prodLines.getImage());
                state = pstm.executeUpdate() == 1;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return state;
    }

    public boolean deleteProductLine(String productLine) {
        boolean state = false;
        try {
            con = ConnectionMySQL.getConnection();
            query = "DELETE FROM productlines WHERE productLine = ?;";
            pstm = con.prepareStatement(query);
            pstm.setString(1, productLine);
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
