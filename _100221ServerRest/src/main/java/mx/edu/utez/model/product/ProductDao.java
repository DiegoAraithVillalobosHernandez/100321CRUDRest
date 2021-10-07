package mx.edu.utez.model.product;

import mx.edu.utez.model.product.Product;
import mx.edu.utez.service.ConnectionMySQL;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDao {
    Connection con;
    PreparedStatement pstm;
    ResultSet rs;
    Statement stm;
    String query;

    public List<Product> findAll() {
        List<Product> listProduct = new ArrayList();
        try {
            con = ConnectionMySQL.getConnection();
            query = "SELECT * FROM products;";
            stm = con.createStatement();
            rs = stm.executeQuery(query);
            while (rs.next()) {
                Product product = new Product();
                product.setProductCode(rs.getString("productCode"));
                product.setProductName(rs.getString("productName"));
                product.setProductLine(rs.getString("productLine"));
                product.setProductScale(rs.getString("productScale"));
                product.setProductVendor(rs.getString("productVendor"));
                product.setProductDescription(rs.getString("productDescription"));
                product.setQuantityInStock(rs.getInt("quantityInStock"));
                product.setBuyPrice(rs.getDouble("buyPrice"));
                product.setMSRP(rs.getDouble("MSRP"));
                listProduct.add(product);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return listProduct;
    }

    public Product findByProductNumber(String productCode) {
        Product product = null;
        try {
            con = ConnectionMySQL.getConnection();
            query = "SELECT * FROM products WHERE productCode = ?";
            pstm = con.prepareStatement(query);
            pstm.setString(1, productCode);
            rs = pstm.executeQuery();
            if (rs.next()) {
                product = new Product();
                product.setProductCode(rs.getString("productCode"));
                product.setProductName(rs.getString("productName"));
                product.setProductLine(rs.getString("productLine"));
                product.setProductScale(rs.getString("productScale"));
                product.setProductVendor(rs.getString("productVendor"));
                product.setProductDescription(rs.getString("productDescription"));
                product.setQuantityInStock(rs.getInt("quantityInStock"));
                product.setBuyPrice(rs.getDouble("buyPrice"));
                product.setMSRP(rs.getDouble("MSRP"));
            }
        } catch (SQLException | NullPointerException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return product;
    }

    public boolean saveProduct(Product product, boolean isCreated) {
        boolean state = false;
        try {
            con = ConnectionMySQL.getConnection();
            if (isCreated) {
                query = "INSERT INTO products(productCode, productName, productLine, productScale, productVendor, " +
                        "productDescription, quantityInStock, buyPrice, MSRP) VALUES(?,?,?,?,?,?,?,?,?);";
                pstm = con.prepareStatement(query);
                pstm.setString(1, product.getProductCode());
                pstm.setString(2, product.getProductName());
                pstm.setString(3, product.getProductLine());
                pstm.setString(4, product.getProductScale());
                pstm.setString(5, product.getProductVendor());
                pstm.setString(6, product.getProductDescription());
                pstm.setInt(7, product.getQuantityInStock());
                pstm.setDouble(8, product.getBuyPrice());
                pstm.setDouble(9, product.getMSRP());
                state = pstm.executeUpdate() == 1;
            } else {
                query = "UPDATE products SET productName = ?, productLine = ? , productScale = ?," +
                        "productVendor = ?, productDescription = ?, quantityInStock = ?, buyPrice = ?, MSRP = ? " +
                        "WHERE productCode = ?";
                pstm = con.prepareStatement(query);
                pstm.setString(9, product.getProductCode());
                pstm.setString(1, product.getProductName());
                pstm.setString(2, product.getProductLine());
                pstm.setString(3, product.getProductScale());
                pstm.setString(4, product.getProductVendor());
                pstm.setString(5, product.getProductDescription());
                pstm.setInt(6, product.getQuantityInStock());
                pstm.setDouble(7, product.getBuyPrice());
                pstm.setDouble(8, product.getMSRP());
                state = pstm.executeUpdate() == 1;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnections();
        }
        return state;
    }

    public boolean deleteProduct(String productCode) {
        boolean state = false;
        try {
            con = ConnectionMySQL.getConnection();
            query = "DELETE FROM products WHERE productCode = ?;";
            pstm = con.prepareStatement(query);
            pstm.setString(1, productCode);
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
