import { Layout } from '@layouts/';
import StyledText from '@components/Text';
import { StyledBox } from '@components/Box';
import { StyledSubmitableForm } from '@components/SubmitableForm';
import { SearchIcon } from '@components/Icons';
import { ChangeEvent, useCallback, useContext, useEffect } from 'react';
import { ProductsContext } from '@contexts/ProductsContext';
import { StyledDropdown } from '@components/Dropdown';
import { LIMIT_PRODUCTS, SORT_OPTIONS } from '@constants/baseConfig';
import styled from 'styled-components';
import { StyledProductCard } from './ProductCard';
import { Link } from 'react-router-dom';
import { getProducts } from 'src/services/Products';

const Homepage = () => {
  const { state, actions } = useContext(ProductsContext);
  const { searchValue, pageNumber, sortOption, products } = state;

  const {
    getProductsRequestSuccess,
    handleSortProducts,
    resetInitialState,
    handleSearchProducts,
    getProductsRequestFail,
  } = actions;

  useEffect(() => {
    return () => {
      resetInitialState();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams({
          ...sortOption,
          _page: pageNumber.toString(),
          _limit: LIMIT_PRODUCTS.toString(),
        });

        const result = await getProducts(params, searchValue);

        getProductsRequestSuccess(result.products, Number(result.totalProducts));
      } catch (error) {
        getProductsRequestFail(`Error! An error occurred: ${error}. Please try again later`);
      }
    };

    fetchData();
  }, [searchValue, pageNumber, sortOption]);

  const onChangeDropdownSortBy = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    const [_sort, _order] = sortValue.split('_');

    handleSortProducts({
      _sort,
      _order,
    });
  }, []);

  const onChangeSearchInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    handleSearchProducts(e.target.value);
  }, []);

  return (
    <Layout>
      <StyledSection>
        <StyledText as="h2" fontWeight={500} fontSize={33} lineHeight={43}>
          Shop The Latest
        </StyledText>
        <StyledHomepageWrap>
          <StyledBox>
            <StyledSubmitableForm
              formWidth={261}
              placeholderInput="Search..."
              IconComponent={SearchIcon}
              inputVariant="primary"
              value={searchValue}
              onChange={onChangeSearchInput}
            />

            <StyledBox mTop={39}>
              <StyledDropdown
                options={SORT_OPTIONS}
                placeholder="Sort By"
                name="sortBy"
                value={Object.values(sortOption).join('_')}
                onChange={onChangeDropdownSortBy}
              />
            </StyledBox>
          </StyledBox>
          <StyledProducts>
            {products.length > 0 ? (
              products.map((item) => (
                <Link to={`products/${item.id}`} key={item.id}>
                  <StyledProductCard data={item} />
                </Link>
              ))
            ) : (
              <StyledText>No product</StyledText>
            )}
          </StyledProducts>
        </StyledHomepageWrap>
      </StyledSection>
    </Layout>
  );
};

const StyledHomepageWrap = styled.div`
  display: flex;
  gap: 35px;
  padding-top: 39px;
`;

const StyledProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px 24px;
`;
const StyledSection = styled.section`
  padding: 96px 96px 252px 96px;
  padding-left: 96px;
  padding-right: 96px;
  max-width: 1440px;
  margin: 0 auto;

  a {
    text-decoration: none;

    :hover {
      background-color: #eeeeee;
    }
  }
`;

export { Homepage };
