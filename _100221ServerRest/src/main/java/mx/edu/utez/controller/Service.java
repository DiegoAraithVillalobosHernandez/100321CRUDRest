package mx.edu.utez.controller;

import mx.edu.utez.model.customer.Customer;
import mx.edu.utez.model.customer.CustomerDao;
import mx.edu.utez.model.office.Office;
import mx.edu.utez.model.office.OfficeDao;
import mx.edu.utez.model.product.Product;
import mx.edu.utez.model.product.ProductDao;
import mx.edu.utez.model.product_line.ProductLine;
import mx.edu.utez.model.product_line.ProductLineDao;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import java.util.List;


@Path("/customer")
public class Service {

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> getEmployees() {
        return new CustomerDao().findAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer getCustomer(@PathParam("id") int customerNumber) {
        return new CustomerDao().findByCustomerNumber(customerNumber);
    }

    @POST//actualizar
    @Path("/save")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public Customer save(MultivaluedMap<String, String> formParams) {
        int customerNumber = Integer.parseInt(formParams.get("customerNumber").get(0));

        if (new CustomerDao().saveCustomer(getParams(customerNumber, formParams), true)){
            return new CustomerDao().findByCustomerNumber(customerNumber);
        }else{
            return null;
        }
    }

    @POST//registrar
    @Path("/save/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public Customer save(@PathParam("id") int customerNumber, MultivaluedMap<String, String> formParams) {
        if (new CustomerDao().saveCustomer(getParams(customerNumber, formParams), false)){
            return new CustomerDao().findByCustomerNumber(customerNumber);
        }else{
            return null;
        }
    }

    @POST
    @Path("/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean deleteCustomer(@PathParam("id") int customerNumber) {
        return new CustomerDao().deleteCustomer(customerNumber);
    }

    private Customer getParams(int customerNumber, MultivaluedMap<String, String> formParams) {
        String customerName = formParams.get("customerName").get(0);
        String contactLastName = formParams.get("contactLastName").get(0);
        String contactFirstName = formParams.get("contactFirstName").get(0);
        String phone = formParams.get("phone").get(0);
        String addressLine1 = formParams.get("addressLine1").get(0);
        String addressLine2 = formParams.get("addressLine2").get(0);
        String city = formParams.get("city").get(0);
        String state = formParams.get("state").get(0);
        String postalCode = formParams.get("postalCode").get(0);
        String country = formParams.get("country").get(0);
        int salesRepEmployeeNumber = Integer.parseInt(formParams.get("salesRepEmployeeNumber").get(0));
        double creditLimit = Double.parseDouble(formParams.get("creditLimit").get(0));
        Customer customer = new Customer(customerNumber, customerName,contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit);
        System.out.println(customer);
        return customer;
    }
    //offices ------------------------------------------------------------------
    @GET
    @Path("/offices/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Office> getOffices() {
        return new OfficeDao().findAll();
    }

    @GET
    @Path("/offices/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Office getOffice(@PathParam("id") String officeCode) {
        return new OfficeDao().findByOfficesNumber(officeCode);
    }

    @POST//actualizar
    @Path("/offices/save")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public Office saveOffice(MultivaluedMap<String, String> formParams) {
        String officeCode = formParams.get("officeCode").get(0);

        if (new OfficeDao().saveOffices(getParamsOffices(officeCode, formParams), true)){
            return new OfficeDao().findByOfficesNumber(officeCode);
        }else{
            return null;
        }
    }

    @POST//registrar
    @Path("/offices/save/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public Office saveOffice(@PathParam("id") String officeCode, MultivaluedMap<String, String> formParams) {
        if (new OfficeDao().saveOffices(getParamsOffices(officeCode, formParams), false)){
            return new OfficeDao().findByOfficesNumber(officeCode);
        }else{
            return null;
        }
    }

    @POST
    @Path("/offices/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean deleteOffice(@PathParam("id") String officeCode) {
        return new OfficeDao().deleteOffices(officeCode);
    }

    private Office getParamsOffices(String officeCode, MultivaluedMap<String, String> formParams) {
        String city = formParams.get("city").get(0);
        String phone = formParams.get("phone").get(0);
        String addressLine1 = formParams.get("addressLine1").get(0);
        String addressLine2 = formParams.get("addressLine2").get(0);
        String state = formParams.get("state").get(0);
        String country = formParams.get("country").get(0);
        String postalCode = formParams.get("postalCode").get(0);
        String territory = formParams.get("territory").get(0);
        Office office = new Office(officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory);
        System.out.println(office);
        return office;
    }
    //Product lines --------------------------------------------------------------
    @GET
    @Path("/prod_lines/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<ProductLine> getProductLines() {
        return new ProductLineDao().findAll();
    }

    @GET
    @Path("/prod_lines/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ProductLine getProductLine(@PathParam("id") String productLine) {
        return new ProductLineDao().findByProductLineNumber(productLine);
    }

    @POST//actualizar
    @Path("/prod_lines/save")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public ProductLine saveProductLine(MultivaluedMap<String, String> formParams) {
        String productLine = formParams.get("productLine").get(0);

        if (new ProductLineDao().saveProductLine(getParamsProdLines(productLine, formParams), true)){
            return new ProductLineDao().findByProductLineNumber(productLine);
        }else{
            return null;
        }
    }

    @POST//registrar
    @Path("/prod_lines/save/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public ProductLine saveProductLine(@PathParam("id") String productLine, MultivaluedMap<String, String> formParams) {
        if (new ProductLineDao().saveProductLine(getParamsProdLines(productLine, formParams), false)){
            return new ProductLineDao().findByProductLineNumber(productLine);
        }else{
            return null;
        }
    }

    @POST
    @Path("/prod_lines/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean deleteProdLines(@PathParam("id") String productLine) {
        return new ProductLineDao().deleteProductLine(productLine);
    }

    private ProductLine getParamsProdLines(String productLine, MultivaluedMap<String, String> formParams) {
        String textDescription = formParams.get("textDescription").get(0);
        String htmlDescription = formParams.get("htmlDescription").get(0);
        String image = formParams.get("image").get(0);
        ProductLine ProductLine  = new ProductLine(productLine, textDescription, htmlDescription, image);
        System.out.println(ProductLine);
        return ProductLine;
    }
    //Products ------------------------------------------------------------
    @GET
    @Path("/products/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> getProducts() {
        return new ProductDao().findAll();
    }

    @GET
    @Path("/products/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Product getProduct(@PathParam("id") String productCode) {
        return new ProductDao().findByProductNumber(productCode);
    }

    @POST//actualizar
    @Path("/products/save")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public Product saveProduct(MultivaluedMap<String, String> formParams) {
        String productCode = formParams.get("productCode").get(0);

        if (new ProductDao().saveProduct(getParamsProduct(productCode, formParams), true)){
            return new ProductDao().findByProductNumber(productCode);
        }else{
            return null;
        }
    }

    @POST//registrar
    @Path("/products/save/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public Product saveProduct(@PathParam("id") String productCode, MultivaluedMap<String, String> formParams) {
        if (new ProductDao().saveProduct(getParamsProduct(productCode, formParams), false)){
            return new ProductDao().findByProductNumber(productCode);
        }else{
            return null;
        }
    }

    @POST
    @Path("/products/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public boolean deleteProduct(@PathParam("id") String productCode) {
        System.out.println("entre");
        return new ProductDao().deleteProduct(productCode);
    }

    private Product getParamsProduct(String productCode, MultivaluedMap<String, String> formParams) {
        String productName = formParams.get("productName").get(0);
        String productLine = formParams.get("productLine").get(0);
        String productScale = formParams.get("productScale").get(0);
        String productVendor = formParams.get("productVendor").get(0);
        String productDescription = formParams.get("productDescription").get(0);
        int quantityInStock = Integer.parseInt(formParams.get("quantityInStock").get(0));
        double buyPrice = Double.parseDouble(formParams.get("buyPrice").get(0));
        double MSRP = Double.parseDouble(formParams.get("MSRP").get(0));

        Product product  = new Product(productCode, productName, productLine, productScale, productVendor, productDescription , quantityInStock, buyPrice, MSRP);
        System.out.println(product);
        return product;
    }
    @GET
    @Path("/idEmployees/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Integer> getIdEmployees() {
        return new CustomerDao().findAllIdEmployees();
    }
}