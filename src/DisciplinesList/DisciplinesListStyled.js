import styled from "styled-components";

export const DisciplinesListStyled = styled.div`
    padding: 30px;
    .header {
        font-size: 32px;
        font-weight: bold;
    }
    .table-container {
        table {
            margin-top: 30px;
            width: 100%;
            thead {
                tr {
                    &:first-child {
                        display: none;
                    }
                    th {
                        padding:12px 20px;
                        background: #fafafa;
                        border-bottom: 1px solid rgba(0,0,0,0.06);
                    }
                }
            }
            tbody {
                
                tr {
                    td {
                        padding:12px 20px;
                        border-bottom: 3px solid #f8f9fd;
                        cursor: pointer;
                        &:first-child {
                            color: blue;
                            cursor: pointer;
                        }
                        a {
                            text-decoration: none;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                        input {
                            &:focus {
                                border: none;
                            }
                            border: none;
                        }
                    }
                    &:hover {
                        td {
                            
                            input {
                                background: inset 0 0 0 9999px var(--bs-table-accent-bg);

                                &:focus {
                                    background: #f8f9fd;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;