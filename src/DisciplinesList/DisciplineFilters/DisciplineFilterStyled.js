import styled from "styled-components";

export const DisciplineFilterStyled = styled.div`
margin-top: 30px;
display: flex;
align-items:center;
.seprator {
    width: 2px;
    margin: 0 12px;
    background: #ccc;
    height: 32px;
}
.input-wrapper {
    position: relative;
    .search-icon {
        position: absolute;
        width: 18px;
        top: 4px;
        left: 10px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.filter-group {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
   .select-input {
       min-width: 160px;
   }
   .view-type {
       margin-left: auto;
       .view-icon {
        height: 26px;
        width: 26px;
        cursor: pointer;
        margin: 0 12px;
       }
   }
}
`;
export const Input = styled.input`
    font-size:  14px;
    padding: 8px 6px 8px 32px;
    border: 1px solid #ccc;
    border-radius: 50px;
    min-width: 150px;
    
    ::placeholder {
        color: gray;
    }
`;